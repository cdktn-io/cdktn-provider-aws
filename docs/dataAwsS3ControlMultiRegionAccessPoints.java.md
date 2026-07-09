# `dataAwsS3ControlMultiRegionAccessPoints` Submodule <a name="`dataAwsS3ControlMultiRegionAccessPoints` Submodule" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsS3ControlMultiRegionAccessPoints <a name="DataAwsS3ControlMultiRegionAccessPoints" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/s3control_multi_region_access_points aws_s3control_multi_region_access_points}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_control_multi_region_access_points.DataAwsS3ControlMultiRegionAccessPoints;

DataAwsS3ControlMultiRegionAccessPoints.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .accountId(java.lang.String)
//  .region(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/s3control_multi_region_access_points#account_id DataAwsS3ControlMultiRegionAccessPoints#account_id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/s3control_multi_region_access_points#account_id DataAwsS3ControlMultiRegionAccessPoints#account_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/s3control_multi_region_access_points#region DataAwsS3ControlMultiRegionAccessPoints#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.resetRegion"></a>

```java
public void resetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsS3ControlMultiRegionAccessPoints resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.isConstruct"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_control_multi_region_access_points.DataAwsS3ControlMultiRegionAccessPoints;

DataAwsS3ControlMultiRegionAccessPoints.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_control_multi_region_access_points.DataAwsS3ControlMultiRegionAccessPoints;

DataAwsS3ControlMultiRegionAccessPoints.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.isTerraformDataSource"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_control_multi_region_access_points.DataAwsS3ControlMultiRegionAccessPoints;

DataAwsS3ControlMultiRegionAccessPoints.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_control_multi_region_access_points.DataAwsS3ControlMultiRegionAccessPoints;

DataAwsS3ControlMultiRegionAccessPoints.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsS3ControlMultiRegionAccessPoints.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsS3ControlMultiRegionAccessPoints resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsS3ControlMultiRegionAccessPoints to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsS3ControlMultiRegionAccessPoints that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/s3control_multi_region_access_points#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsS3ControlMultiRegionAccessPoints to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.accessPoints">accessPoints</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList">DataAwsS3ControlMultiRegionAccessPointsAccessPointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `accessPoints`<sup>Required</sup> <a name="accessPoints" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.accessPoints"></a>

```java
public DataAwsS3ControlMultiRegionAccessPointsAccessPointsList getAccessPoints();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList">DataAwsS3ControlMultiRegionAccessPointsAccessPointsList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsS3ControlMultiRegionAccessPointsAccessPoints <a name="DataAwsS3ControlMultiRegionAccessPointsAccessPoints" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPoints.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_control_multi_region_access_points.DataAwsS3ControlMultiRegionAccessPointsAccessPoints;

DataAwsS3ControlMultiRegionAccessPointsAccessPoints.builder()
    .build();
```


### DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlock <a name="DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlock" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlock"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlock.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_control_multi_region_access_points.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlock;

DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlock.builder()
    .build();
```


### DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegions <a name="DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegions" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegions.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_control_multi_region_access_points.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegions;

DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegions.builder()
    .build();
```


### DataAwsS3ControlMultiRegionAccessPointsConfig <a name="DataAwsS3ControlMultiRegionAccessPointsConfig" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_control_multi_region_access_points.DataAwsS3ControlMultiRegionAccessPointsConfig;

DataAwsS3ControlMultiRegionAccessPointsConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .accountId(java.lang.String)
//  .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/s3control_multi_region_access_points#account_id DataAwsS3ControlMultiRegionAccessPoints#account_id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/s3control_multi_region_access_points#account_id DataAwsS3ControlMultiRegionAccessPoints#account_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/s3control_multi_region_access_points#region DataAwsS3ControlMultiRegionAccessPoints#region}

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsS3ControlMultiRegionAccessPointsAccessPointsList <a name="DataAwsS3ControlMultiRegionAccessPointsAccessPointsList" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_control_multi_region_access_points.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList;

new DataAwsS3ControlMultiRegionAccessPointsAccessPointsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.get"></a>

```java
public DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference <a name="DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_control_multi_region_access_points.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference;

new DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.property.publicAccessBlock">publicAccessBlock</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList">DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.property.regions">regions</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList">DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPoints">DataAwsS3ControlMultiRegionAccessPointsAccessPoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `publicAccessBlock`<sup>Required</sup> <a name="publicAccessBlock" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.property.publicAccessBlock"></a>

```java
public DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList getPublicAccessBlock();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList">DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList</a>

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.property.regions"></a>

```java
public DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList getRegions();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList">DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.property.internalValue"></a>

```java
public DataAwsS3ControlMultiRegionAccessPointsAccessPoints getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPoints">DataAwsS3ControlMultiRegionAccessPointsAccessPoints</a>

---


### DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList <a name="DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_control_multi_region_access_points.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList;

new DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.get"></a>

```java
public DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference <a name="DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_control_multi_region_access_points.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference;

new DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.property.blockPublicAcls">blockPublicAcls</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.property.blockPublicPolicy">blockPublicPolicy</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.property.ignorePublicAcls">ignorePublicAcls</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.property.restrictPublicBuckets">restrictPublicBuckets</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlock">DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlock</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `blockPublicAcls`<sup>Required</sup> <a name="blockPublicAcls" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.property.blockPublicAcls"></a>

```java
public IResolvable getBlockPublicAcls();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `blockPublicPolicy`<sup>Required</sup> <a name="blockPublicPolicy" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.property.blockPublicPolicy"></a>

```java
public IResolvable getBlockPublicPolicy();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `ignorePublicAcls`<sup>Required</sup> <a name="ignorePublicAcls" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.property.ignorePublicAcls"></a>

```java
public IResolvable getIgnorePublicAcls();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `restrictPublicBuckets`<sup>Required</sup> <a name="restrictPublicBuckets" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.property.restrictPublicBuckets"></a>

```java
public IResolvable getRestrictPublicBuckets();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.property.internalValue"></a>

```java
public DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlock getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlock">DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlock</a>

---


### DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList <a name="DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_control_multi_region_access_points.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList;

new DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.get"></a>

```java
public DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference <a name="DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_s3_control_multi_region_access_points.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference;

new DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.property.bucketAccountId">bucketAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegions">DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `bucketAccountId`<sup>Required</sup> <a name="bucketAccountId" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.property.bucketAccountId"></a>

```java
public java.lang.String getBucketAccountId();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.property.internalValue"></a>

```java
public DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegions getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegions">DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegions</a>

---



