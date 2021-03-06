## HMDA Filing Frequently Asked Questions

### Account Registration

**What information do I need to provide to register my financial institution?**
To register your financial institution on the HMDA platform institutions you will need to provide your institution name, LEI (legal entity identifier), tax ID number, email domain (example: cfpb.gov), and agency code. Registration is a two-step process. You must create a filer account **and** register your institution in the system. You can register your financial institution here: https://hmdahelp.consumerfinance.gov/accounthelp/. Do not use a personal email to register for an account. The HMDA platform is designed to authenticate users based upon a financial institution’s registered domain email. If you do not have a financial institution domain email , contact HMDA Help.

**What is a Legal Entity Identifier (LEI)?**
Every institution that files a HMDA submission will be required to obtain a LEI for their submission whether they are exempt or not. The Global LEI Foundation website provides a list of LEI issuing organizations at https://www.gleif.org/en/about-lei/get-an-lei-find-lei-issuing-organizations. A financial institution may obtain a LEI, for HMDA reporting purposes, from any one of the issuing organizations listed on the web site. For general information on the “LEI,” see section 5.2 of the HMDA Small Entity Compliance Guide, and Regulation C, 12 CFR §§ 1003.4(a)(1)(i)(A), effective January 1, 2018, and 1003.5(a)(3)(vii), effective January 1, 2019.

**What is my agency code?**
Institutions should provide one of the following agency codes: 
1 - Office of the Comptroller of the Currency (OCC)
2 - Federal Reserve System (FRS)
3 - Federal Deposit Insurance Corporation (FDIC)
5 - National Credit Union Administration (NCUA)
7 - United States Department of Housing and Urban Development (HUD)
9 - Consumer Financial Protection Bureau (CFPB)

Non-depository institutions that are not affiliated with a depository institution should select 7 - HUD. Do not select 9 - CFPB unless your institution is regulated by the CFPB or affiliated with an institution regulated by the CFPB.

For additional information, please review page 272 of the 2019 Getting It Right Guide found here: https://www.ffiec.gov/hmda/pdf/2019guide.pdf. This details how the appropriate federal agency is determined.

### Filing Preparation

**How can I test my file before submitting it to HMDA?**
You can submit test data to the Bureau via the Beta submission platform found here: https://ffiec.beta.cfpb.gov/. The Beta submission platform gives you an opportunity to review and resolve edits as well as identify formatting errors prior to the official filing period. Data submitted to the Beta submission platform is not retained by the Bureau, or any other regulatory agency.

**What tools can I use to help prepare my file for submission?**
You can use the **Filing Instructions Guide (FIG)** for the applicable year you are filing data for. Filing Instructions Guides for each year can be found on the home page of https://ffiec.cfpb.gov/, under the “Help For Filers” section. 

+ LAR File Format: **Section 3.3 of the FIG** provides filers with the proper steps to format your LAR File. An example of a correctly formatted file can be found here: https://github.com/cfpb/hmda-platform/blob/master/data/2019/clean_test_files/bank_1/clean_file_100_rows_Bank1.txt.

+ Data Fields: **Section 3.4 of the FIG** includes all acceptable values and exemption codes for the various data fields. **Sections 4.2.1 and 4.2.2 of the FIG** detail data specifications for each field.

+ Edits: Syntactical, Validity, Quality, and Macro quality edits can be found in **Section 5.3 of the FIG**.  

The **LAR Formatting Tool** assists institutions that are not using their own vendor software in formatting their LAR files correctly. In order to successfully use the tool, Excel macros need to be enabled; please work with your IT department if this is not the case. Additionally, institutions should take note of the annotations that appear when hovering over each cell. These annotations describe what values can be included in each cell. The first tab of the tool entitled “Resources” gives instructions on use.  

The **File Format Verification Tool** is a resource for testing whether your file meets certain formatting requirements specified in the HMDA FIG, specifically that the file
- is pipe-delimited;
- has the proper number of data fields; and
- has data fields formatted as integers, where necessary.
The FFVT does not allow you to submit HMDA data. Additionally, there is a unique File Format Verification Tool for each HMDA data collection year, so please select the relevant year before uploading a file.  

The **Rate Spread Calculator** allows institutions to enter their loan data manually, or upload a CSV file of loan information that will help calculate the rate spread.  

The **Check Digit Tool** can be used to either generate check digits or validate ULIs. 


**I’m having issues when I try to upload my file, what should I do?**
If you are having issues uploading a new file and are receiving errors from a previous upload, please refresh the page, log out, clear your browser’s cache (clear your browser’s history), and log back in, and upload your file again. Additionally, if you are using Internet Explorer, we have found that filers have fewer browser caching issues using Google Chrome. The time to upload may vary depending on the size of your institution’s LAR(s).  In some cases, very large files can take a day to fully load.  Be sure to allocate enough time for the upload process to complete prior to the filing deadline.  Do not refresh or close the browser window while the file is uploading. If you continue to experience timeouts or other upload errors, we would recommend the following URLs are whitelisted in your DLP to allow for transfer of HMDA files.
 - ffiec.cfpb.gov
 - ffiec.beta.cfpb.gov
 
**If I use separate systems to create my LAR, will uploading more than one at a time be an issue?**
If using two separate systems to create your LAR File, please combine all entries into one file. Uploading a new file will overwrite the first file uploaded.


### Submission

**March 1, 2020 falls on a Sunday, what is the filing deadline for submission of 2019 HMDA data?**
<a target="_blank" rel="noopener noreferrer" href="https://www.consumerfinance.gov/policy-compliance/rulemaking/regulations/1003/5/#a-1">As stated in Section 1003.5(a)(1)(iii)</a> when the last day for submission falls on a Saturday or Sunday a submission shall be considered timely if it is submitted on the next succeeding Monday. Submissions of 2019 HMDA data will be considered timely if received on or before Monday, March 2, 2020.

**How do I know my file was submitted?**
Upon signing and submitting your file, an email confirming your submission will be sent to the email address on file. Additionally, when you log into your account, you should see a message stating:
"Your submission has been accepted. This completes your HMDA filing process for this year. If you need to upload a new HMDA file, the previously completed filing will not be overridden until all edits have been cleared and verified, and the new file has been submitted." 
Below that message is a button that says 'View Completed Filing'. Select that and you will see the date and timestamp your file was accepted along with a receipt number for the submission. 

**When can I submit my file?**
To test your HMDA data, the beta platform will be open throughout the year. Visit https://ffiec.beta.cfpb.gov/ to test your HMDA data.
Annual HMDA data submissions for the 2019 filing year are accepted January 1 - March 1, 2020. Quarterly HMDA data submissions are separated into three quarters. Quarter 1 filing period: April 1 - May 30, 2020; Quarter 2 filing period: July 1 - August 29, 2020; Quarter 3 filing period: October 1 - November 29, 2020.

**Should I file quarterly?**
Beginning January 1, 2020, the 2015 HMDA Final Rule requires quarterly reporting for financial institutions that reported a combined total of at least 60,000 applications and covered loans, excluding purchased covered loans, for the preceding calendar year. Thus, in addition to their annual data submission, these larger-volume reporters will submit HMDA data for each of the first three quarters of the year on a quarterly basis. Further information can be found in Regulation C, 12 CFR 1003.5(a)(1)(ii). 



### Resubmissions

**I need to resubmit my data, what do I do?**
In order to resubmit, please log into the HMDA Platform. The corrected file that you upload will overwrite the old file. 

**I missed the annual filing period deadline and am submitting my file late. Who do I need to notify?**
If you wish to explain the circumstances surrounding a late submission, contact your federal HMDA supervisory agency.



### Miscellaneous 

**What steps should I take on the Co-Applicant Credit Score and Co-Applicant Credit Scoring Model when there is no co-applicant?**
If the Action Taken is 4, 5, or 6, an institution should report 8888 in the Credit Score of Co-Applicant or Co-Borrower data field and 9 in the Co-Applicant or Co-Borrower, Name and Version of Credit Scoring Model data field, regardless of whether there is a Co-Applicant for the record(s).

**I am receiving formatting errors/edits regarding ethnicity and/or race of applicant fields.**
Please note that the fields 'Ethnicity of Applicant or Borrower 1-5' and 'Race of Applicant or Borrower 1-5' are for up to 5 ethnicities/races of the first applicant. For any co-applicant ethnicities/races, please enter values in the fields **'Ethnicity of Co-Applicant or Co-Borrower 1-5'** or **'Race of Co-Applicant or Co-Borrower 1-5'**.

**I am receiving validity edits regarding my county codes & census tracts. Can you explain how these fields are derived?**
Your county code is a 5 digit number that combines state and county codes. Your census tract should be an 11 digit number. Your census tract combines the 2 digit state, 3 digit county, and 6 digit tract code (with no decimal). The FFIEC census tool and FFIEC geocoder can assist in providing the correct state, county and census tract combinations.
Census Tool: https://www.ffiec.gov/%5C/census/default.aspx
Geocoder: https://geomap.ffiec.gov/FFIECGeocMap/GeocodeMap1.aspx

For example, in the case of Baldwin County, Alabama, the 2 digit state code would be 01 and the 3 digit county code would be 003. Therefore, the reported county code would be 01003. In the case that the 6 digit tract code selected is 020100, the combined census tract code would be 01003020100.

**What decimal precision is the Loan-to-Value ratio rounded to?**
The precision of the calculated LTV should be rounded to match the decimal precision of the CLTV.

For example, take a calculated LTV (loan amount/property value) of 75.4025 and a reported CLTV of 75. The calculated LTV will round down to 75. In the case that the reported CLTV is 75.4, the calculated LTV will down down to 75.4.

**Where can I find HMDA data prior to 2017?**
Each year thousands of financial institutions report data about mortgages to the public, under the Home Mortgage Disclosure Act (HMDA). We provide the data collected under HMDA from 2007-2017 for download <a target="_blank" rel="noopener noreferrer" href="https://www.consumerfinance.gov/data-research/hmda/historic-data/">here.</a>



**I have a question that's not covered in the FAQ section, what can I do?**
For further questions, please email hmdahelp@cfpb.gov. Note that HMDA Help only operates via email.
