# Web Development Project 6 - *Data-Dashboard-2*

Submitted by: **Dennis Shlaih**

This web app: **OpenLibrary Dashboard provides an interactive interface to explore books by category, view detailed information on individual titles, and visualize book data through dynamic bar and pie charts. Users can filter books by genre, search by title, and gain insights into edition counts and author distribution through looking at  data visualizations created by Recharts. The app uses React Router for navigation across pages, including a sidebar for quick access to Home and charts on Top Books and Top Authors.**

Time spent: **9** hours spent in total

## Required Features

The following **required** functionality is completed:

- [X] **Clicking on an item in the list view displays more details about it**
  - Clicking on an item in the dashboard list navigates to a detail view for that item
  - Detail view includes extra information about the item not included in the dashboard view
  - The same sidebar is displayed in detail view as in dashboard view
  - *To ensure an accurate grade, your sidebar **must** be viewable when showing the details view in your recording.*
- [X] **Each detail view of an item has a direct, unique URL link to that item’s detail view page**
  -  *To ensure an accurate grade, the URL/address bar of your web browser **must** be viewable in your recording.*
- [X] **The app includes at least two unique charts developed using the fetched data that tell an interesting story**
  - At least two charts should be incorporated into the dashboard view of the site
  - Each chart should describe a different aspect of the dataset

The following **optional** features are implemented:

- [ ] The site’s customized dashboard contains more content that explains what is interesting about the data 
  - e.g., an additional description, graph annotation, suggestion for which filters to use, or an additional page that explains more about the data
- [ ] The site allows users to toggle between different data visualizations
  - User should be able to use some mechanism to toggle between displaying and hiding visualizations 

## Video Walkthrough

Here's a walkthrough of implemented user stories:

![Hobby Hub Walkthrough](https://github.com/user-attachments/assets/342ea442-d547-4038-8551-471338b6bb8f)

GIF created with Microsoft Clipchamp

## Challenges

- [X] I initially struggled with loading the correct book data in the DetailView route. The app fetched data from a subject-based endpoint that didn’t always include the selected book, leading to missing or incorrect details. 
- [X] Managing form state across different components
- [X] Recharts required data to be formatted in very specific structures. Dynamically generating chart-friendly data from nested and inconsistent book data (e.g. missing fields, varying author formats) was difficult.

## License

    Copyright [2025] [Dennis Shlaih]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
