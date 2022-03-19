Project description:

An interactive dashboard of research publication dataset using Python library and streamlit.(dataset will be provided)
users can enter a keyword to filter the dashboard. EXP: data mining/ image processing
- filters: author's name, affiliation, country
- paper published by year
- citation by year
- top-cited publication
- most preferred publications type
- most-cited publications type
- top institutions collaborator and top country collaborator
- co-author network of the authors(important)

- co-author recommendation using social network analysis
calculate centrality measure of the authors' degree, betweenness and eigenvector. Normalize the value using min-max normalization and added together.
Then the value will be ranked from highest to lowest.
The next step is to extract the top 200 authors based on the obtained values from the author-titles dataset(provided).
Then users need to enter a name to get a recommendation.
The system will compute the similarity between the input author's name and the top 200 authors using cosine similarity.
Finally, the system will recommend the top 10 authors with the highest similarity value and the results will be displayed on streamlit. below the dashboard