//
//  MyButtonManager.m
//  WowImRN
//
//  Created by Xiong Gao on 2023/8/7.
//

#import "MyButtonManager.h"
#import "MyButton.h"

@implementation MyButtonManager

// 导出桥接宏标记
RCT_EXPORT_MODULE()

- (UIView *)view
{
    //创建组件实例
    MyButton * viewInstance =[[MyButton alloc] init];
    return viewInstance;
}

@end
