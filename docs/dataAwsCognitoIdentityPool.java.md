# `dataAwsCognitoIdentityPool` Submodule <a name="`dataAwsCognitoIdentityPool` Submodule" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsCognitoIdentityPool <a name="DataAwsCognitoIdentityPool" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/cognito_identity_pool aws_cognito_identity_pool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_cognito_identity_pool.DataAwsCognitoIdentityPool;

DataAwsCognitoIdentityPool.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .identityPoolName(java.lang.String)
//  .id(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.Initializer.parameter.identityPoolName">identityPoolName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/cognito_identity_pool#identity_pool_name DataAwsCognitoIdentityPool#identity_pool_name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/cognito_identity_pool#id DataAwsCognitoIdentityPool#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/cognito_identity_pool#tags DataAwsCognitoIdentityPool#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `identityPoolName`<sup>Required</sup> <a name="identityPoolName" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.Initializer.parameter.identityPoolName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/cognito_identity_pool#identity_pool_name DataAwsCognitoIdentityPool#identity_pool_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/cognito_identity_pool#id DataAwsCognitoIdentityPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/cognito_identity_pool#region DataAwsCognitoIdentityPool#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/cognito_identity_pool#tags DataAwsCognitoIdentityPool#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.resetId"></a>

```java
public void resetId()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsCognitoIdentityPool resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.isConstruct"></a>

```java
import io.cdktn.providers.aws.data_aws_cognito_identity_pool.DataAwsCognitoIdentityPool;

DataAwsCognitoIdentityPool.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.data_aws_cognito_identity_pool.DataAwsCognitoIdentityPool;

DataAwsCognitoIdentityPool.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.isTerraformDataSource"></a>

```java
import io.cdktn.providers.aws.data_aws_cognito_identity_pool.DataAwsCognitoIdentityPool;

DataAwsCognitoIdentityPool.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.data_aws_cognito_identity_pool.DataAwsCognitoIdentityPool;

DataAwsCognitoIdentityPool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsCognitoIdentityPool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsCognitoIdentityPool resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsCognitoIdentityPool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsCognitoIdentityPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/cognito_identity_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsCognitoIdentityPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.allowClassicFlow">allowClassicFlow</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.allowUnauthenticatedIdentities">allowUnauthenticatedIdentities</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.cognitoIdentityProviders">cognitoIdentityProviders</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersList">DataAwsCognitoIdentityPoolCognitoIdentityProvidersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.developerProviderName">developerProviderName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.openidConnectProviderArns">openidConnectProviderArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.samlProviderArns">samlProviderArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.supportedLoginProviders">supportedLoginProviders</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.identityPoolNameInput">identityPoolNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.identityPoolName">identityPoolName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `allowClassicFlow`<sup>Required</sup> <a name="allowClassicFlow" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.allowClassicFlow"></a>

```java
public IResolvable getAllowClassicFlow();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `allowUnauthenticatedIdentities`<sup>Required</sup> <a name="allowUnauthenticatedIdentities" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.allowUnauthenticatedIdentities"></a>

```java
public IResolvable getAllowUnauthenticatedIdentities();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `cognitoIdentityProviders`<sup>Required</sup> <a name="cognitoIdentityProviders" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.cognitoIdentityProviders"></a>

```java
public DataAwsCognitoIdentityPoolCognitoIdentityProvidersList getCognitoIdentityProviders();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersList">DataAwsCognitoIdentityPoolCognitoIdentityProvidersList</a>

---

##### `developerProviderName`<sup>Required</sup> <a name="developerProviderName" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.developerProviderName"></a>

```java
public java.lang.String getDeveloperProviderName();
```

- *Type:* java.lang.String

---

##### `openidConnectProviderArns`<sup>Required</sup> <a name="openidConnectProviderArns" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.openidConnectProviderArns"></a>

```java
public java.util.List<java.lang.String> getOpenidConnectProviderArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `samlProviderArns`<sup>Required</sup> <a name="samlProviderArns" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.samlProviderArns"></a>

```java
public java.util.List<java.lang.String> getSamlProviderArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `supportedLoginProviders`<sup>Required</sup> <a name="supportedLoginProviders" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.supportedLoginProviders"></a>

```java
public StringMap getSupportedLoginProviders();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `identityPoolNameInput`<sup>Optional</sup> <a name="identityPoolNameInput" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.identityPoolNameInput"></a>

```java
public java.lang.String getIdentityPoolNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `identityPoolName`<sup>Required</sup> <a name="identityPoolName" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.identityPoolName"></a>

```java
public java.lang.String getIdentityPoolName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPool.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsCognitoIdentityPoolCognitoIdentityProviders <a name="DataAwsCognitoIdentityPoolCognitoIdentityProviders" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProviders"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProviders.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_cognito_identity_pool.DataAwsCognitoIdentityPoolCognitoIdentityProviders;

DataAwsCognitoIdentityPoolCognitoIdentityProviders.builder()
    .build();
```


### DataAwsCognitoIdentityPoolConfig <a name="DataAwsCognitoIdentityPoolConfig" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_cognito_identity_pool.DataAwsCognitoIdentityPoolConfig;

DataAwsCognitoIdentityPoolConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .identityPoolName(java.lang.String)
//  .id(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolConfig.property.identityPoolName">identityPoolName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/cognito_identity_pool#identity_pool_name DataAwsCognitoIdentityPool#identity_pool_name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/cognito_identity_pool#id DataAwsCognitoIdentityPool#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/cognito_identity_pool#tags DataAwsCognitoIdentityPool#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `identityPoolName`<sup>Required</sup> <a name="identityPoolName" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolConfig.property.identityPoolName"></a>

```java
public java.lang.String getIdentityPoolName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/cognito_identity_pool#identity_pool_name DataAwsCognitoIdentityPool#identity_pool_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/cognito_identity_pool#id DataAwsCognitoIdentityPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/cognito_identity_pool#region DataAwsCognitoIdentityPool#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/cognito_identity_pool#tags DataAwsCognitoIdentityPool#tags}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsCognitoIdentityPoolCognitoIdentityProvidersList <a name="DataAwsCognitoIdentityPoolCognitoIdentityProvidersList" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_cognito_identity_pool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersList;

new DataAwsCognitoIdentityPoolCognitoIdentityProvidersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersList.get"></a>

```java
public DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference <a name="DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_cognito_identity_pool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference;

new DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.providerName">providerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.serverSideTokenCheck">serverSideTokenCheck</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProviders">DataAwsCognitoIdentityPoolCognitoIdentityProviders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `providerName`<sup>Required</sup> <a name="providerName" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.providerName"></a>

```java
public java.lang.String getProviderName();
```

- *Type:* java.lang.String

---

##### `serverSideTokenCheck`<sup>Required</sup> <a name="serverSideTokenCheck" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.serverSideTokenCheck"></a>

```java
public IResolvable getServerSideTokenCheck();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.internalValue"></a>

```java
public DataAwsCognitoIdentityPoolCognitoIdentityProviders getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsCognitoIdentityPool.DataAwsCognitoIdentityPoolCognitoIdentityProviders">DataAwsCognitoIdentityPoolCognitoIdentityProviders</a>

---



