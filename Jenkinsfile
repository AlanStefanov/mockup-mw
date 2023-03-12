node {
    stage('Scm Checkout'){
        git credentialsId: 'git', url: 'https://github.com/AlanStefanov/mockup-mw.git'
    }
    stage ('Build Docker Image') {
        sh 'docker build -t mockup-mw:latest .'
    }
}
