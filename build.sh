# This build file is to help build and install ionic/react into test-app easier, not to actually build test-app
cd /Users/elylucas/projects/ionic/ionic/packages/react
npm run build
npm pack
cd /Users/elylucas/projects/ionictestapps/react/react-hooks
npm i /Users/elylucas/projects/ionic/ionic/packages/react/ionic-react-5.4.1.tgz
npm run start


