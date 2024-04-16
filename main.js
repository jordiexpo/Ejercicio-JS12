const emojis = ["🥩", "🍕", "🍙", "🍣", "🍟", "🥛", "🍔", "🍓"];
            const screenArray = [];
            const arrayHtml = document.getElementById('arrayHtml');
        
            const addElement = () => {
                const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
                screenArray.push(randomEmoji);
                newArrayHtml();
            };
        
            const popElement = () => {
                if (screenArray.length > 0) {
                    screenArray.pop();
                    newArrayHtml();
                } 
            };
        
            const shiftElement = () => {
                if (screenArray.length > 0) {
                    screenArray.shift();
                    newArrayHtml();
                }
            };
        
            const unshiftElement = () => {
                const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
                screenArray.unshift(randomEmoji);
                newArrayHtml();
            };

            const insertElementAt = () => {
                const position = document.getElementById('addPosition').value;
                const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
                if (position >= 0 && position <= screenArray.length) {
                    screenArray.splice(position, 0, randomEmoji);
                    newArrayHtml();
                } else {
                    alert("Invalid position!");
                }
            };

            const removeElementAt = () => {
                const position = document.getElementById('removePosition').value;
                if (position >= 0 && position < screenArray.length) {
                    screenArray.splice(position, 1);
                    newArrayHtml();
                } else {
                    alert("Invalid position!");
                }
            };
        
            document.getElementById('push').addEventListener("click", addElement);
            document.getElementById('pop').addEventListener("click", popElement);
            document.getElementById('shift').addEventListener("click", shiftElement);
            document.getElementById('unshift').addEventListener("click", unshiftElement);
            document.getElementById('insertAt').addEventListener("click", insertElementAt);
            document.getElementById('removeAt').addEventListener("click", removeElementAt);
        
            const newArrayHtml = () => {
                arrayHtml.innerText = `${screenArray.join(', ')}`;
            };