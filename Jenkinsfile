node {
    stage('Scm Checkout'){
        git credentialsId: 'git', url: 'https://github.com/AlanStefanov/mockup-mw.git'
    }
    stage ('Build Docker Image') {
        sh 'docker build -t mockup-mw:latest .'
    }
    stage('Run  Docker Container'){
        sh 'docker run -it -dp 4000:80 mockup-mw:latest'

    }
}
