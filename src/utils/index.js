import copy from "clipboard-copy";

export const handleCopyText = async ( textToCopy, callback ) => {
    let isCopied = false;
	try {
		await copy(textToCopy);
        isCopied = true;
        callback(isCopied)
		setTimeout(() => {
            isCopied = false;
            callback(isCopied);
		}, 3000);
	} catch (error) {
		console.error("Error copying to clipboard:", error);
	}
};
