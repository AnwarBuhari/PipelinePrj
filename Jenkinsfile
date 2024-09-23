pipeline {
    agent any
    stages{
        stage('checkout'){
            steps{
            checkout scm
            }
        }
        stage('Install'){
            steps{
            sh 'sudo apt install npm'
            }
        }
        stage('Build'){
            steps{
            sh 'npm run build'
            }
        }
    }
}
