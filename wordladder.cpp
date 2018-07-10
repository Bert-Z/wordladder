#include <fstream>
#include <iostream>
#include <map>
#include <queue>
#include <sstream>
#include <stack>
#include <string>

using namespace std;

map<string, int> dictionary;
string word1, word2;
int quit = 0;
int flag = 0;

void importDic()
{
    string fileName;
    string wordInDic;

    cout << "Dictionary file name? ";
    cin >> fileName;

    ifstream inputDic;
    inputDic.open(string("../inputfile/") + fileName, ifstream::in);

    while (inputDic >> wordInDic)
    {
        if (!dictionary.count(wordInDic))
        {
            dictionary[wordInDic] = 0;
        }
    }

    if (dictionary.size() == 0)
    {
        cout << "Unable to open that file. Try again." << endl;
        importDic();
    }
}

void getword1()
{
    cout << "Word #1 (or Enter to quit): ";

    char a = cin.get();
    if (a != '\n')
    {
        cin.putback(a);
        cin >> word1;
        cin.get();
        // cout << word1 << endl;
    }
    else
    {
        quit = 1;
    }
}
void getword2()
{
    cout << "Word #2 (or Enter to quit): ";

    char a = cin.get();
    if (a != '\n')
    {
        cin.putback(a);
        cin >> word2;
        cin.get();
        // cout << word2 << endl;
    }
    else
    {
        quit = 1;
    }
}

void getTwoWords()
{
    cout << endl;

    getword1();
    getword2();

    if (word1 == word2)
    {
        cout << "The two words must different." << endl;
        getTwoWords();
    }
    else
    {
        if (quit == 0)
            cout << "A ladder from " << word2 << " back to " << word1 << endl;
    }
}

void wordLadderfunc()
{
    stack<string> targetStack;
    queue<stack<string>> wordLadderQue;

    stack<string> partialLadder;
    partialLadder.push(word1);
    dictionary[word1] = 1;

    wordLadderQue.push(partialLadder);

    while (!wordLadderQue.empty())
    {
        stack<string> currentWordStack = wordLadderQue.front();
        wordLadderQue.pop();

        string currentWord = currentWordStack.top();

        //变更一个字母
        for (auto it = currentWord.begin(); it != currentWord.end(); it++)
        {
            char now = *it;
            for (char x = 'a'; x <= 'z'; x++)
            {
                stringstream ss;
                ss << x;
                string m = ss.str();

                currentWord.replace(it, it + 1, m);
                if (currentWord == word2)
                {
                    flag = 1;
                    stack<string> newStack = currentWordStack;
                    newStack.push(word2);
                    targetStack = newStack;
                    break;
                }
                else
                {
                    if (dictionary.count(currentWord) && dictionary[currentWord] != 1)
                    {

                        stack<string> newStack = currentWordStack;
                        newStack.push(currentWord);
                        wordLadderQue.push(newStack);

                        dictionary[currentWord] = 1;
                    }
                }
            }

            if (flag == 1)
            {
                break;
            }

            stringstream cc;
            cc << now;
            string usual = cc.str();
            currentWord.replace(it, it + 1, usual);
        }

        if (flag == 1)
        {
            break;
        }

        //添加一个字母
        for (auto it = currentWord.begin(); it != currentWord.end() + 1; it++)
        {

            for (char x = 'a'; x <= 'z'; x++)
            {
                currentWord.insert(it, x);
                if (currentWord == word2)
                {
                    flag = 1;
                    stack<string> newStack = currentWordStack;
                    newStack.push(word2);
                    targetStack = newStack;
                    break;
                }
                else
                {
                    if (dictionary.count(currentWord) && dictionary[currentWord] != 1)
                    {

                        stack<string> newStack = currentWordStack;
                        newStack.push(currentWord);
                        wordLadderQue.push(newStack);

                        dictionary[currentWord] = 1;
                    }
                }
                currentWord.erase(it);
            }

            if (flag == 1)
            {
                break;
            }
        }
        if (flag == 1)
        {
            break;
        }

        //删去一个字母
        for (auto it = currentWord.begin(); it != currentWord.end(); it++)
        {
            char now = *it;

            currentWord.erase(it);
            if (currentWord == word2)
            {
                flag = 1;
                stack<string> newStack = currentWordStack;
                newStack.push(word2);
                targetStack = newStack;
                break;
            }
            else
            {
                if (dictionary.count(currentWord) && dictionary[currentWord] != 1)
                {

                    stack<string> newStack = currentWordStack;
                    newStack.push(currentWord);
                    wordLadderQue.push(newStack);

                    dictionary[currentWord] = 1;
                }
            }

            if (flag == 1)
            {
                break;
            }

            currentWord.insert(it, now);
        }

        if (flag == 1)
        {
            break;
        }
    }

    int size = targetStack.size();
    for (int i = 0; i < size; i++)
    {
        cout << targetStack.top() << " ";
        targetStack.pop();
    }
    cout << endl;
}

int main()
{
    importDic();
    cin.get();

    while (quit == 0)
    {
        getTwoWords();
        if (quit == 0)
        {
            wordLadderfunc();

            for (auto it = dictionary.begin(); it != dictionary.end(); it++)
            {
                it->second = 0;
            }
        }

        flag = 0;
    }

    cout << "Have a nice day." << endl;
    system("pause");

    return 0;
}