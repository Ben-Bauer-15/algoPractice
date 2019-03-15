public class BST {

    public static int height(Node root){
        if (root == null){
            return -1;
        }

        int left = height(root.left);
        int right = height(root.right);

        int current = (left > right) ? left : right;

        return current + 1;
    }

    public static void main(String [] args){
        Node root = new Node(6);
        root.left = new Node(5);
        root.left.left = new Node(3);
        root.right = new Node(10);

        int height = height(root);
        System.out.println(height);
        System.out.println("hello world!");

    }


}
