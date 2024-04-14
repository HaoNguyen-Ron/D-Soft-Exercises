//-----------------------------------------So sánh giữa map(), forEach, và for loop //-----------------------------------------

+ Giống: cả ba hàm đều lặp qua phần tử của một mảng và thực hiện thao tác trên mỗi phần tử đó.

+ Khác: 
    for loop: 
        - Vòng lặp for là một control flow statement (lệnh điều kiển luồng đi) dùng để thực thi một khối mã lệnh lặp đi lặp lại cho đến khi điều kiện được đáp ứng.
        - Vì có điều kiện, vòng for có thể break ra khỏi hàm mặc dù vẫn còn phần tử trong mảng. 
        - Với một vòng lặp for, bạn có thể thực hiện bất kỳ loại thao tác nào trên các phần tử của một mảng, bao gồm async promise.
        - For loop thích hợp khi bạn cần kiểm soát linh hoạt hơn trong quá trình lặp, hoặc cần thực hiện các loại thao tác phức tạp hơn trên các phần tử của mảng.

    map(): 
        - Phương thức map() là một HOC (hàm bật cao), nhận một hàm callback làm đối số, và callback này được thực thi trên mỗi phần tử của mảng. Cuối cùng return một mảng mới với kết quả của hàm gọi lại.
        - map() về bản chất sẽ lặp qua và return lại tất cả phần tử vào trong mảng mới mặc dù có phần tử không được thao tác.
        - map() thích hợp khi muốn thực hiện một phép toán cụ thể trên từng phần tử của mảng và tạo ra một mảng mới với kết quả của phép toán đó.

    forEach():
        - Phương thức forEach() là một HOC, không tạo ra một mảng mới, thay vào đó, nó chỉ thực thi một hàm callback cho mỗi phần tử của mảng.


//----------------------------------------- So sánh giữa find, findIndex, filter //-----------------------------------------

+ Giống: các hàm đều lặp qua từng phần tử để tìm kiếm phần tử trùng với điều kiện

+ Khác : 
    find, findIndex, findLast, findLastIndex:
        - Lặp và return về phần tử đầu tiên trùng với điều kiện, cho dù trong mảng còn có các phần tử khác đều đúng với điều kiện.
        - Return về undefined nếu không tìm thấy phần tử nào đúng với điều kiện.
        - Nhược: Trong trường hợp mảng có kích thước lớn hàm find() sẽ dùng linear search, lặp qua từng phần tử và gọi callback để kiểm tra điều kiện cho đến khi tìm được phần tử phù hợp, dẫn đến không hiệu quả về mặt hiệu suất

    filter: 
        - Tạo ra một mảng mới chứa các phần tử của mảng gốc mà thỏa mãn điều kiện được chỉ định.
        -Nhược: Khi sử dụng filter() để lọc một mảng lớn, nó có thể tạo ra một mảng mới có kích thước lớn, tốn nhiều bộ nhớ hơn.

//----------------------------------------- So sánh giữa reducer và for loop //-----------------------------------------

+ Giống: reduce() và for loop dùng để tính toán (reduce) một mảng thành 1 giá trị duy nhất.

+ Khác : 
     reduce(): 
        + Viết mã ngắn gọn và dễ đọc hơn so với việc sử dụng vòng lặp for, đặc biệt khi bạn cần thực hiện các thao tác tích luỹ trên mảng.
        + Có thể thực hiện các phép toán tích luỹ phức tạp như tổng hợp, tính tổng, tích, tìm giá trị lớn nhất/nhỏ nhất.
        + Reduce() không thay đổi mảng gốc mà nó được gọi trên, mà thay vào đó, nó trả về một giá trị duy nhất
        + Nhược: Cú pháp khó hiểu và khó sử dụng

