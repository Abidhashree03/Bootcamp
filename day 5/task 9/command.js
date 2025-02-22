const fs = require('fs');
const path = require('path');

const command = process.argv[2];
const fileName = process.argv[3];
const filePath = path.join(__dirname, fileName || '');

switch (command) {
    case 'create':
        if (!fileName) {
            console.error('Please provide a file name.');
            process.exit(1);
        }
        fs.writeFileSync(filePath, '', 'utf8');
        console.log(`File '${fileName}' created successfully.`);
        break;
    
    case 'delete':
        if (!fileName) {
            console.error('Please provide a file name.');
            process.exit(1);
        }
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
            console.log(`File '${fileName}' deleted successfully.`);
        } else {
            console.error(`File '${fileName}' does not exist.`);
        }
        break;
    
    
    default:
        console.log('Usage: node my-tool.js <command> <filename>');
        console.log('Commands:');
        console.log('  create <filename>  - Create a new file');
        console.log('  delete <filename>  - Delete a file');
    }
