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
                sh 'npm start'
                //sh 'sleep 60'
                //sh 'echo $! > .pidfile'
                //sh 'set +x'


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