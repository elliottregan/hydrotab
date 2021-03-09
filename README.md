# HydroTab

## Requirements
- Docker

Alternatively, you can run the build commands found in package.json with 

## Build Commands

### Build for Web
Building HydroTab as a regular web page, run the following:

`make build`

### Build Browser Extension
Building the browser extension includes a background process, manifest.json, and will package everything up into a .zip file for submission.

`make build-browser`

## Development Commands

### Development for the Web
To run the development environment, run:

`make develop`

#### Develop Browser Extension
The build tool, Vite, doesn't have a development mode that supports Web Extension development, so for now, you just have to run the same production build command to test the browser extension.

`make build-browser`