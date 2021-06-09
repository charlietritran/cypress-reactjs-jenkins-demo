pipeline {
    agent any

    tools {nodejs "NodeJS10.24.1"}

    environment {
        CHROME_BIN = '/bin/google-chrome'
    }

    stages {
        stage('Dependencies') {
            steps {
                sh 'npm i'
            }
        }
        stage('Build and start local server for react app in background') {
            steps {
                echo 'Runnig npm start in background'
                //sh 'set -x'
                sh 'npm start &'
                //sh 'sleep 1'
                //sh 'echo $! > .pidfile'
                //sh 'set +x'


            }
        }
        /*stage('start local server') {
            steps {
                // start local server in the background
                // we will shut it down in "post" command block
                sh 'nohup npm run start'
            }
        }*/

        stage('Unit Tests') {
            steps {
                sh 'npm run cypress:headless'
                
            }
        }
        stage('e2e Tests') {
            steps {
                echo 'e2e Testing....'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }

    post {
    // shutdown the server running in the background
    always {
      echo 'Stopping local server'
      //sh 'pkill -f http-server'
    }
  }

}