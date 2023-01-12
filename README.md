Notes:
    git clone --single-branch --branch <branchname> <remote-repo>

- go sum errors while installing packages
    go env -w GOSUMDB=off

- Create a CLI app to replace Fastqc

- Explore CLI in golang
- Explore templating in golang
- Explore generate static site content in golang
- Explore charting libraries


- fetch updates
'''bash
git fetch <remote_name> <branch_name>
git branch <branch_name> FETCH_HEAD
git checkout <branch_name>
'''


- Calculate Phred Score and plot in graph
    - https://dmnfarrell.github.io/python/fastq-quality-python
    - https://www.illumina.com/documents/products/technotes/technote_Q-Scores.pdf
    - https://support.illumina.com/help/BaseSpace_OLH_009008/Content/Source/Informatics/BS/QualityScoreEncoding_swBS.htm