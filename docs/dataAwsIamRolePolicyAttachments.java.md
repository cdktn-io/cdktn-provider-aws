# `dataAwsIamRolePolicyAttachments` Submodule <a name="`dataAwsIamRolePolicyAttachments` Submodule" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsIamRolePolicyAttachments <a name="DataAwsIamRolePolicyAttachments" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/iam_role_policy_attachments aws_iam_role_policy_attachments}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_iam_role_policy_attachments.DataAwsIamRolePolicyAttachments;

DataAwsIamRolePolicyAttachments.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .roleName(java.lang.String)
//  .pathPrefix(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.Initializer.parameter.roleName">roleName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/iam_role_policy_attachments#role_name DataAwsIamRolePolicyAttachments#role_name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.Initializer.parameter.pathPrefix">pathPrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/iam_role_policy_attachments#path_prefix DataAwsIamRolePolicyAttachments#path_prefix}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.Initializer.parameter.roleName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/iam_role_policy_attachments#role_name DataAwsIamRolePolicyAttachments#role_name}.

---

##### `pathPrefix`<sup>Optional</sup> <a name="pathPrefix" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.Initializer.parameter.pathPrefix"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/iam_role_policy_attachments#path_prefix DataAwsIamRolePolicyAttachments#path_prefix}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.resetPathPrefix">resetPathPrefix</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetPathPrefix` <a name="resetPathPrefix" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.resetPathPrefix"></a>

```java
public void resetPathPrefix()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsIamRolePolicyAttachments resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.isConstruct"></a>

```java
import io.cdktn.providers.aws.data_aws_iam_role_policy_attachments.DataAwsIamRolePolicyAttachments;

DataAwsIamRolePolicyAttachments.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.data_aws_iam_role_policy_attachments.DataAwsIamRolePolicyAttachments;

DataAwsIamRolePolicyAttachments.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.isTerraformDataSource"></a>

```java
import io.cdktn.providers.aws.data_aws_iam_role_policy_attachments.DataAwsIamRolePolicyAttachments;

DataAwsIamRolePolicyAttachments.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.data_aws_iam_role_policy_attachments.DataAwsIamRolePolicyAttachments;

DataAwsIamRolePolicyAttachments.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsIamRolePolicyAttachments.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsIamRolePolicyAttachments resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsIamRolePolicyAttachments to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsIamRolePolicyAttachments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/iam_role_policy_attachments#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsIamRolePolicyAttachments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.property.attachedPolicies">attachedPolicies</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesList">DataAwsIamRolePolicyAttachmentsAttachedPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.property.pathPrefixInput">pathPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.property.roleNameInput">roleNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.property.pathPrefix">pathPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.property.roleName">roleName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `attachedPolicies`<sup>Required</sup> <a name="attachedPolicies" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.property.attachedPolicies"></a>

```java
public DataAwsIamRolePolicyAttachmentsAttachedPoliciesList getAttachedPolicies();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesList">DataAwsIamRolePolicyAttachmentsAttachedPoliciesList</a>

---

##### `pathPrefixInput`<sup>Optional</sup> <a name="pathPrefixInput" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.property.pathPrefixInput"></a>

```java
public java.lang.String getPathPrefixInput();
```

- *Type:* java.lang.String

---

##### `roleNameInput`<sup>Optional</sup> <a name="roleNameInput" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.property.roleNameInput"></a>

```java
public java.lang.String getRoleNameInput();
```

- *Type:* java.lang.String

---

##### `pathPrefix`<sup>Required</sup> <a name="pathPrefix" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.property.pathPrefix"></a>

```java
public java.lang.String getPathPrefix();
```

- *Type:* java.lang.String

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.property.roleName"></a>

```java
public java.lang.String getRoleName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsIamRolePolicyAttachmentsAttachedPolicies <a name="DataAwsIamRolePolicyAttachmentsAttachedPolicies" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPolicies.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_iam_role_policy_attachments.DataAwsIamRolePolicyAttachmentsAttachedPolicies;

DataAwsIamRolePolicyAttachmentsAttachedPolicies.builder()
    .build();
```


### DataAwsIamRolePolicyAttachmentsConfig <a name="DataAwsIamRolePolicyAttachmentsConfig" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_iam_role_policy_attachments.DataAwsIamRolePolicyAttachmentsConfig;

DataAwsIamRolePolicyAttachmentsConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .roleName(java.lang.String)
//  .pathPrefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsConfig.property.roleName">roleName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/iam_role_policy_attachments#role_name DataAwsIamRolePolicyAttachments#role_name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsConfig.property.pathPrefix">pathPrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/iam_role_policy_attachments#path_prefix DataAwsIamRolePolicyAttachments#path_prefix}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsConfig.property.roleName"></a>

```java
public java.lang.String getRoleName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/iam_role_policy_attachments#role_name DataAwsIamRolePolicyAttachments#role_name}.

---

##### `pathPrefix`<sup>Optional</sup> <a name="pathPrefix" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsConfig.property.pathPrefix"></a>

```java
public java.lang.String getPathPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/iam_role_policy_attachments#path_prefix DataAwsIamRolePolicyAttachments#path_prefix}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsIamRolePolicyAttachmentsAttachedPoliciesList <a name="DataAwsIamRolePolicyAttachmentsAttachedPoliciesList" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_iam_role_policy_attachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesList;

new DataAwsIamRolePolicyAttachmentsAttachedPoliciesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesList.get"></a>

```java
public DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference <a name="DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_iam_role_policy_attachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference;

new DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.property.policyArn">policyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.property.policyName">policyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPolicies">DataAwsIamRolePolicyAttachmentsAttachedPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `policyArn`<sup>Required</sup> <a name="policyArn" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.property.policyArn"></a>

```java
public java.lang.String getPolicyArn();
```

- *Type:* java.lang.String

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.property.policyName"></a>

```java
public java.lang.String getPolicyName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.property.internalValue"></a>

```java
public DataAwsIamRolePolicyAttachmentsAttachedPolicies getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPolicies">DataAwsIamRolePolicyAttachmentsAttachedPolicies</a>

---



