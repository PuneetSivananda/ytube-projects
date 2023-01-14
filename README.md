Notes:
    git clone --single-branch --branch <branchname> <remote-repo>

- go sum errors while installing packages
    go env -w GOSUMDB=off

- Create a CLI app to replace Fastqc

- Pivot from a full fledged cli app to a parsing toolset for the fastqc generated file.


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

- Read FASTQC Documentation
    - https://rtsf.natsci.msu.edu/genomics/tech-notes/fastqc-tutorial-and-faq/

- RNASeq Analysis
    - https://qfab-bioinformatics.github.io/workshops-RNAseq-analysis-with-R/
    - https://github.com/QFAB-Bioinformatics/workshops-RNAseq-analysis-with-R
    
- Calculate Phred Score and plot in graph
    - https://dmnfarrell.github.io/python/fastq-quality-python
    - https://www.illumina.com/documents/products/technotes/technote_Q-Scores.pdf
    - https://support.illumina.com/help/BaseSpace_OLH_009008/Content/Source/Informatics/BS/QualityScoreEncoding_swBS.htm