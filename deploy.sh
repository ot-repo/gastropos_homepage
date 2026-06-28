#!/usr/bin/env bash
#
# Prerender the whole site and deploy it to Firebase Hosting in one run.
#
# Usage:
#   ./deploy.sh
#
# Requires the Firebase CI token in the GPTOKEN environment variable
# (a `firebase login:ci` token). Override the target project with
# FIREBASE_PROJECT if needed.

set -euo pipefail

# Always run from the directory this script lives in (repo root).
cd "$(dirname "$0")"

PROJECT="${FIREBASE_PROJECT:-gastro-pos-homepage}"

if [ -z "${GPTOKEN:-}" ]; then
  echo "Error: GPTOKEN is not set. Export your Firebase CI token first:" >&2
  echo "  export GPTOKEN=\"<firebase login:ci token>\"" >&2
  exit 1
fi

echo "==> Building & prerendering static site..."
yarn build

if [ ! -f dist/client/index.html ]; then
  echo "Error: build did not produce dist/client/index.html — aborting deploy." >&2
  exit 1
fi

echo "==> Deploying to Firebase Hosting (project: $PROJECT)..."
FIREBASE_TOKEN="$GPTOKEN" npx -y firebase-tools@latest deploy \
  --only hosting \
  --project "$PROJECT" \
  --non-interactive

echo "==> Done. Live at: https://${PROJECT}.web.app"
