export default {
    installCommand: 'npm install',
    postGitCloneCommand: 'node ./scripts/git-setup.js',
    postInstallCommand: 'npm run cleanup',
    devCommand: 'npm run dev', // Adjust this command according to your project setup
};
