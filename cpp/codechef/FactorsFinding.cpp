#include <iostream>
#include <list>
using namespace std;

class FACTOR{
private:
  int nFactors;
public:
  int Count = 0;
  list <int> factorsList;
  void showList()
  {
    list <int> :: iterator it;
    for(it = factorsList.begin(); it != factorsList.end(); ++it)
        cout << *it <<' ';
    cout << '\n';
  }
  void findFactors(){
    for(int i = 1; i <= nFactors; i++){
      if (nFactors%i ==0){
        factorsList.push_back(i);
        Count++;
      }
    }
    cout << Count << endl;
  }

  FACTOR(int nfac){
    nFactors = nfac;
  }
};

int main() {
  int n1;
  cin >> n1;
  FACTOR i1 = FACTOR(n1);
  i1.findFactors();
  i1.showList();
  return 0;
}