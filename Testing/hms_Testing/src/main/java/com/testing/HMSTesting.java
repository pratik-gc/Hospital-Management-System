package com.testing;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class HMSTesting {

	public static void main(String[] args) throws InterruptedException {

		System.setProperty("webdriver.chrome.driver",
				"D:\\project_selenium\\hms_Testing\\src\\main\\resources\\chromedriver.exe");

		WebDriver driver = new ChromeDriver();

		driver.manage().window().maximize();
		Thread.sleep(2000);
		driver.get("http://localhost:3000/");
		
		
		Thread.sleep(3000);
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("window.scrollBy(0,2000)", "");
		Thread.sleep(3000);
		js.executeScript("window.scrollBy(0,-2000)", "");

		Thread.sleep(3000);
		
		WebElement login = driver.findElement(By.id("home_page_login"));


		login.click();

		/* enter email and password */

		Thread.sleep(2000);
		WebElement email = driver.findElement(By.id("inputEmail"));
		email.sendKeys("admin1@gmail.com");
		Thread.sleep(2000);
		WebElement password = driver.findElement(By.id("inputPassword"));
		password.sendKeys("admin123");
		Thread.sleep(2000);
		WebElement loginSubmit = driver.findElement(By.id("loginpage_login"));

		loginSubmit.click();
		
		Thread.sleep(2000);
		password.clear();
		
		Thread.sleep(2000);
		password.sendKeys("admin");
		Thread.sleep(2000);

		loginSubmit.click();
		Thread.sleep(2000);
		
		
		/* add employee */
		WebElement addEmployee = driver.findElement(By.id("adminpage_add_employee"));
		addEmployee.click();
		Thread.sleep(2000);
		
		WebElement goBackToAdminPage = driver.findElement(By.id("add_employee_go_back"));
		goBackToAdminPage.click();
		Thread.sleep(2000);
		
		WebElement adminHeaderDropdown = driver.findElement(By.id("basic-nav-dropdown"));
		adminHeaderDropdown.click();
		Thread.sleep(2000);
		
		WebElement adminHeaderProfile = driver.findElement(By.id("profile-header-button"));
		adminHeaderProfile.click();
		Thread.sleep(2000);
		
		WebElement adminHeaderProfileGoBack = driver.findElement(By.id("admin-addDoctor-backButton-box"));
		adminHeaderProfileGoBack.click();
		Thread.sleep(2000);
		
		WebElement adminHeaderDropdown1 = driver.findElement(By.id("basic-nav-dropdown"));
		adminHeaderDropdown1.click();
		Thread.sleep(2000);
		
		WebElement adminHeaderLogout = driver.findElement(By.id("logout-header-button"));
		adminHeaderLogout.click();
		Thread.sleep(4000);
		
		
		
		
		
		
		
		
		/* end of add employee*/
		
		
		driver.close();
		
		
		
		
		
		

	}

}
