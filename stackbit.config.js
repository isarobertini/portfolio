export default {
    installCommand: 'npm install',
    postGitCloneCommand: 'node ./scripts/git-setup.js',
    postInstallCommand: 'npm run cleanup',
};