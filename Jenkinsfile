pipeline {
    agent any
    stages{
        stage('checkout'){
            steps{
            checkout scm
            }
        }
        stage('Install Node.js') {
            steps{
                if ! node -v > /dev/null 2>&1; then
                  echo "Installing Node.js"
                fi
            }
        }
    }
}
