#!/bin/bash
yarn build
ossutil64 cp -r dist/ $PIPELINE_OSS --force