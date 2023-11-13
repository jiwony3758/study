/*
주석은 /\*와 *\/를 이용해 여러 줄에 걸쳐 주석 처리
*/


#include <stdio.h>
int main(void) 
{
  printf("Hello C world \n");

  // 특수 문자

  // 경고음 소리 발생
  printf("\a");

  // 백스페이스
  printf("\b");

  // 폼 피드(Form Feed)
  printf("\f");

  // 개행
  printf("\n");

  // 캐리지 리턴
  printf("\r");

  // 수평 탭
  printf("\t");

  // 수직 탭
  printf("\v");

  // 역슬래시
  printf("\\");

  // 작은 따옴표
  printf("\'");

  // 큰 따옴표
  printf("\"");
  return 0;
}