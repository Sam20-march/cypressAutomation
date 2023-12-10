pipline{
    agent any

    parameters{
        choice(name: 'SCRIPT', choices: ['test','headTest','chromTest'], description: "Choice of parameter")
    }

    stages { 
        stage('Build'){
            //The steps section defines a series of one or more steps to be executed in a given stage directive.
            steps {
                echo "Building the application"
            }
        }
        stage('Testing') {
            steps {
                bat "npm i"
                bat "npx cypress run ${SCRIPT}"
            }
        }
        stage('Deploy'){
            steps {
                echo "Deploying Now"
            }
        }
    }

}
