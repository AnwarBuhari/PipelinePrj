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
    }
}
