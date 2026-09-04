# `dataAwsSsmParametersByPath` Submodule <a name="`dataAwsSsmParametersByPath` Submodule" id="@cdktn/provider-aws.dataAwsSsmParametersByPath"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsSsmParametersByPath <a name="DataAwsSsmParametersByPath" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/ssm_parameters_by_path aws_ssm_parameters_by_path}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_ssm_parameters_by_path.DataAwsSsmParametersByPath;

DataAwsSsmParametersByPath.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .path(java.lang.String)
//  .id(java.lang.String)
//  .recursive(java.lang.Boolean|IResolvable)
//  .region(java.lang.String)
//  .withDecryption(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.Initializer.parameter.path">path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/ssm_parameters_by_path#path DataAwsSsmParametersByPath#path}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/ssm_parameters_by_path#id DataAwsSsmParametersByPath#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.Initializer.parameter.recursive">recursive</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/ssm_parameters_by_path#recursive DataAwsSsmParametersByPath#recursive}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.Initializer.parameter.withDecryption">withDecryption</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/ssm_parameters_by_path#with_decryption DataAwsSsmParametersByPath#with_decryption}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.Initializer.parameter.path"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/ssm_parameters_by_path#path DataAwsSsmParametersByPath#path}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/ssm_parameters_by_path#id DataAwsSsmParametersByPath#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `recursive`<sup>Optional</sup> <a name="recursive" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.Initializer.parameter.recursive"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/ssm_parameters_by_path#recursive DataAwsSsmParametersByPath#recursive}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/ssm_parameters_by_path#region DataAwsSsmParametersByPath#region}

---

##### `withDecryption`<sup>Optional</sup> <a name="withDecryption" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.Initializer.parameter.withDecryption"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/ssm_parameters_by_path#with_decryption DataAwsSsmParametersByPath#with_decryption}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.resetRecursive">resetRecursive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.resetWithDecryption">resetWithDecryption</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.resetId"></a>

```java
public void resetId()
```

##### `resetRecursive` <a name="resetRecursive" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.resetRecursive"></a>

```java
public void resetRecursive()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetWithDecryption` <a name="resetWithDecryption" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.resetWithDecryption"></a>

```java
public void resetWithDecryption()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsSsmParametersByPath resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.isConstruct"></a>

```java
import io.cdktn.providers.aws.data_aws_ssm_parameters_by_path.DataAwsSsmParametersByPath;

DataAwsSsmParametersByPath.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.data_aws_ssm_parameters_by_path.DataAwsSsmParametersByPath;

DataAwsSsmParametersByPath.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.isTerraformDataSource"></a>

```java
import io.cdktn.providers.aws.data_aws_ssm_parameters_by_path.DataAwsSsmParametersByPath;

DataAwsSsmParametersByPath.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.data_aws_ssm_parameters_by_path.DataAwsSsmParametersByPath;

DataAwsSsmParametersByPath.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsSsmParametersByPath.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsSsmParametersByPath resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsSsmParametersByPath to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsSsmParametersByPath that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/ssm_parameters_by_path#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsSsmParametersByPath to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.arns">arns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.names">names</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.types">types</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.recursiveInput">recursiveInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.withDecryptionInput">withDecryptionInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.recursive">recursive</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.withDecryption">withDecryption</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `arns`<sup>Required</sup> <a name="arns" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.arns"></a>

```java
public java.util.List<java.lang.String> getArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `names`<sup>Required</sup> <a name="names" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.names"></a>

```java
public java.util.List<java.lang.String> getNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `types`<sup>Required</sup> <a name="types" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.types"></a>

```java
public java.util.List<java.lang.String> getTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `recursiveInput`<sup>Optional</sup> <a name="recursiveInput" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.recursiveInput"></a>

```java
public java.lang.Boolean|IResolvable getRecursiveInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `withDecryptionInput`<sup>Optional</sup> <a name="withDecryptionInput" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.withDecryptionInput"></a>

```java
public java.lang.Boolean|IResolvable getWithDecryptionInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `recursive`<sup>Required</sup> <a name="recursive" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.recursive"></a>

```java
public java.lang.Boolean|IResolvable getRecursive();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `withDecryption`<sup>Required</sup> <a name="withDecryption" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.withDecryption"></a>

```java
public java.lang.Boolean|IResolvable getWithDecryption();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPath.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsSsmParametersByPathConfig <a name="DataAwsSsmParametersByPathConfig" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPathConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPathConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_ssm_parameters_by_path.DataAwsSsmParametersByPathConfig;

DataAwsSsmParametersByPathConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .path(java.lang.String)
//  .id(java.lang.String)
//  .recursive(java.lang.Boolean|IResolvable)
//  .region(java.lang.String)
//  .withDecryption(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPathConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPathConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPathConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPathConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPathConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPathConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPathConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPathConfig.property.path">path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/ssm_parameters_by_path#path DataAwsSsmParametersByPath#path}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPathConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/ssm_parameters_by_path#id DataAwsSsmParametersByPath#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPathConfig.property.recursive">recursive</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/ssm_parameters_by_path#recursive DataAwsSsmParametersByPath#recursive}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPathConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPathConfig.property.withDecryption">withDecryption</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/ssm_parameters_by_path#with_decryption DataAwsSsmParametersByPath#with_decryption}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPathConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPathConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPathConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPathConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPathConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPathConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPathConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPathConfig.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/ssm_parameters_by_path#path DataAwsSsmParametersByPath#path}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPathConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/ssm_parameters_by_path#id DataAwsSsmParametersByPath#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `recursive`<sup>Optional</sup> <a name="recursive" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPathConfig.property.recursive"></a>

```java
public java.lang.Boolean|IResolvable getRecursive();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/ssm_parameters_by_path#recursive DataAwsSsmParametersByPath#recursive}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPathConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/ssm_parameters_by_path#region DataAwsSsmParametersByPath#region}

---

##### `withDecryption`<sup>Optional</sup> <a name="withDecryption" id="@cdktn/provider-aws.dataAwsSsmParametersByPath.DataAwsSsmParametersByPathConfig.property.withDecryption"></a>

```java
public java.lang.Boolean|IResolvable getWithDecryption();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/ssm_parameters_by_path#with_decryption DataAwsSsmParametersByPath#with_decryption}.

---



