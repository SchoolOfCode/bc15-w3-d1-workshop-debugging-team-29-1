let initials = "";
names = ["Abe Maxwell", "Martin Boxer Harris", "Felicia Rita Sarah Jones", "Mary Petunia"];
function extractInitialsFromFullName(fullName) {
let names = fullName.split(" ");
for (let i = 0; i < names.length; i++) {
    let currentName = names[i];
    let currentInitial = currentName.at(0);
    initials += currentInitial;
    }
}
extractInitialsFromFullName("Abe Maxwell")