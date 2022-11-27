- Reading Material
    - https://academic.oup.com/bioinformatics/article-pdf/30/1/31/643259/btt310.pdf 
    - https://compbiocore.github.io/qckitfastq/vignette-qckitfastq/
    - analyzing genomes with cumulative skew diagrams - Grigoriev


- Existing tools:
    - K-mer genie (http://kmergenie.bx.psu.edu/)
    - reflect on the outputs generated for the kmer genie and dashboard them as an app for user inputs
- Genomes for the kmer testing
    - https://ftp.ncbi.nlm.nih.gov/genomes/all/GCA/000/001/635/GCA_000001635.2_GRCm38/Primary_Assembly/assembled_chromosomes/FASTA/

- Build a cli toolkit in golang that replicates for fastqc of files
    - https://compbiocore.github.io/qckitfastq/vignette-qckitfastq/
    - cli framework
    - document/replicate existing features
    - completelt in golang

- Build an front end app in golang
    - https://freshman.tech/web-development-with-go/
    - hosting everything in netlify
        - https://www.youtube.com/watch?v=bVmUHvVK8Hs
    - build golang backend and use svelte https://github.com/ksckaan1/go-and-svelte-template
    - netlify and golang https://github.com/carlmjohnson/netlify-go-function-demo/blob/master/public/index.html

- Smallest genome found so far by me:
    - https://www.ncbi.nlm.nih.gov/genome/?term=%20Mycoplasma%20genitalium%20

### repo setup
```bash
git clone -b kmer-genome --single-branch https://github.com/PuneetSivananda/ytube-projects .
```