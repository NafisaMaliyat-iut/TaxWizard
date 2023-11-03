/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
module "github-actions-runners" {
  source  = "terraform-google-modules/github-actions-runners/google"
  version = "3.1.2"
}

provider "google" {
  project = var.gcp_project_id
  credentials = var.gcp_credentials
  region = var.gcp_region
  zone = var.gcp_zone
}
provider "google-beta" {
  project = var.gcp_project_id
  credentials = var.gcp_credentials
  region = var.gcp_region
  zone = var.gcp_zone
}


resource "google_service_account" "sa" {
  project    = var.gcp_project_id
  account_id = "tax-worker"
}

resource "google_project_iam_member" "project" {
  project = var.gcp_project_id
  role    = "roles/storage.admin"
  member  = "serviceAccount:${google_service_account.sa.email}"
}

module "oidc" {
  source      = "./.terraform/modules/github-actions-runners/modules/gh-oidc"
  project_id  = var.gcp_project_id
  pool_id     = "taxworker-pool"
  provider_id = "taxworker-gh-provider"
  sa_mapping = {
    (google_service_account.sa.account_id) = {
      sa_name   = google_service_account.sa.name
      attribute = "attribute.repository/user/repo"
    }
  }
}