// Exercise 2: Add Items to List
        const itemInput = document.getElementById('itemInput');
        const addItemBtn = document.getElementById('addItemBtn');
        const itemList = document.getElementById('itemList');
        
        addItemBtn.addEventListener('click', function() {
            const itemText = itemInput.value.trim();
            
            if (itemText !== '') {
                // Create new item div
                const itemDiv = document.createElement('div');
                itemDiv.className = 'item';
                
                // Create span for text
                const itemSpan = document.createElement('span');
                itemSpan.textContent = itemText;
                
                // Create remove button
                const removeBtn = document.createElement('button');
                removeBtn.textContent = 'Remove';
                removeBtn.className = 'remove-btn';
                removeBtn.addEventListener('click', function() {
                    itemDiv.remove();
                });
                
                // Append elements
                itemDiv.appendChild(itemSpan);
                itemDiv.appendChild(removeBtn);
                itemList.appendChild(itemDiv);
                
                // Clear input
                itemInput.value = '';
            }
        });
        
        // Allow Enter key to add item
        itemInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                addItemBtn.click();
            }
        });