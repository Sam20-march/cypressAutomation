pipeline {
    agent any 
    options {    
        ansiColor('xterm')
    }
    stages {
        stage('Build') { 
            steps {
                script {
                    checkout([
                        $class: 'GitSCM',
                        branches: [[name: '*/main']], // Specify the branch you want to checkout
                        userRemoteConfigs: [[url: 'https://github.com/Sam20-march/cypressAutomation']]
                    ])
                }
            }
        }
        stage('Test') { 
            steps {
                bat "npm i"
                bat "npx cypress run test"
            }
        }
        stage('Deploy') { 
            steps {
                echo "Deploying Now"
            }
        }
    }
}
