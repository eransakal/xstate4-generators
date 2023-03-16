export default function (plop) {
    // controller generator
    plop.setGenerator('init', {
        description: 'application controller logic',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'machine name (without suffix machine)'
        },
        {
            type: 'confirm',        
            name: 'isKME',            
            message: 'Is Kaltura KME machine?'
        }],
        actions: [
            {
                type: 'addMany',
                destination: "{{dashCase name}}-machine",
                base: `../plop-templates/init`,
                templateFiles: `../plop-templates/init/**/*.hbs`            
            }
        ]
    });
};