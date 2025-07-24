import { Locator } from '@playwright/test';

/**
 * BasePage class provides common actions that can be performed on web elements.
 */
class BasePage {

    /**
     * Clicks on a specified web element.
     * @param element - The Locator of the element to click.
     * @param elementName - A descriptive name of the element (used for logging).
     */
    async clickOnWebElement(element: Locator, elementName: string): Promise<void> {
        console.log(`Clicking on '${elementName}'.`);
        await element.click();
    }

    /**
     * Fills a textbox with the provided value.
     * @param element - The Locator of the textbox element.
     * @param value - The value/text to be entered into the textbox.
     * @param textboxName - A descriptive name of the textbox (used for logging).
     */
    async fillTextBox(element: Locator, value: string, textboxName: string): Promise<void> {
        console.log(`Filling '${value}' in '${textboxName}' textbox.`);
        await element.fill(value);
    }

    /**
     * Waits for the element to be visible on the page.
     * @param element - The Locator of the element to wait for.
     * @param timeout - Optional timeout in milliseconds.
     */
    async waitForElementVisible(element: Locator, timeout: number = 5000): Promise<void> {
        await element.waitFor({ state: 'visible', timeout });
    }

    /**
     * Waits for the element to be hidden on the page.
     * @param element - The Locator of the element to wait for.
     * @param timeout - Optional timeout in milliseconds.
     */
    async waitForElementHidden(element: Locator, timeout: number = 5000): Promise<void> {
        await element.waitFor({ state: 'hidden', timeout });
    }

    /**
     * Gets the text content of an element.
     * @param element - The Locator of the element.
     * @returns The text content as a string.
     */
    async getElementText(element: Locator): Promise<string> {
        return await element.textContent() ?? '';
    }

    /**
     * Checks if an element is visible.
     * @param element - The Locator of the element.
     * @returns True if visible, false otherwise.
     */
    async isElementVisible(element: Locator): Promise<boolean> {
        return await element.isVisible();
    }

    /**
     * Checks if an element is enabled.
     * @param element - The Locator of the element.
     * @returns True if enabled, false otherwise.
     */
    async isElementEnabled(element: Locator): Promise<boolean> {
        return await element.isEnabled();
    }

    /**
     * Gets the value of a specified attribute from an element.
     * @param element - The Locator of the element.
     * @param attributeName - The name of the attribute to retrieve.
     * @returns The attribute value as a string or null if not found.
     */
    async getElementAttribute(element: Locator, attributeName: string): Promise<string | null> {
        return await element.getAttribute(attributeName);
    }

    /**
     * Hovers the mouse over the specified element.
     * @param element - The Locator of the element to hover over.
     */
    async hoverOnElement(element: Locator): Promise<void> {
        await element.hover();
    }

    /**
     * Presses a key on the specified element.
     * @param element - The Locator of the element.
     * @param key - The key to press (e.g., 'Enter', 'Tab').
     */
    async pressKeyOnElement(element: Locator, key: string): Promise<void> {
        await element.press(key);
    }

    /**
     * Gets the count of elements matching the locator.
     * @param element - The Locator of the elements.
     * @returns The number of elements found.
     */
    async getElementCount(element: Locator): Promise<number> {
        return await element.count();
    }
}

/**
 * Exports the BasePage class as the default export of this module.
 * @module BasePage
 */
export default BasePage;