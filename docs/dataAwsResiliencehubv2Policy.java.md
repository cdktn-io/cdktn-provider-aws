# `dataAwsResiliencehubv2Policy` Submodule <a name="`dataAwsResiliencehubv2Policy` Submodule" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsResiliencehubv2Policy <a name="DataAwsResiliencehubv2Policy" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/resiliencehubv2_policy aws_resiliencehubv2_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_resiliencehubv2_policy.DataAwsResiliencehubv2Policy;

DataAwsResiliencehubv2Policy.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .arn(java.lang.String)
//  .region(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.Initializer.parameter.arn">arn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/resiliencehubv2_policy#arn DataAwsResiliencehubv2Policy#arn}. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.Initializer.parameter.arn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/resiliencehubv2_policy#arn DataAwsResiliencehubv2Policy#arn}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/resiliencehubv2_policy#region DataAwsResiliencehubv2Policy#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.resetRegion"></a>

```java
public void resetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsResiliencehubv2Policy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.isConstruct"></a>

```java
import io.cdktn.providers.aws.data_aws_resiliencehubv2_policy.DataAwsResiliencehubv2Policy;

DataAwsResiliencehubv2Policy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.data_aws_resiliencehubv2_policy.DataAwsResiliencehubv2Policy;

DataAwsResiliencehubv2Policy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.isTerraformDataSource"></a>

```java
import io.cdktn.providers.aws.data_aws_resiliencehubv2_policy.DataAwsResiliencehubv2Policy;

DataAwsResiliencehubv2Policy.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.data_aws_resiliencehubv2_policy.DataAwsResiliencehubv2Policy;

DataAwsResiliencehubv2Policy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsResiliencehubv2Policy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsResiliencehubv2Policy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsResiliencehubv2Policy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsResiliencehubv2Policy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/resiliencehubv2_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsResiliencehubv2Policy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.availabilitySlo">availabilitySlo</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloList">DataAwsResiliencehubv2PolicyAvailabilitySloList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.dataRecovery">dataRecovery</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryList">DataAwsResiliencehubv2PolicyDataRecoveryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.multiAz">multiAz</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzList">DataAwsResiliencehubv2PolicyMultiAzList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.multiRegion">multiRegion</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionList">DataAwsResiliencehubv2PolicyMultiRegionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.tags">tags</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.arnInput">arnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `availabilitySlo`<sup>Required</sup> <a name="availabilitySlo" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.availabilitySlo"></a>

```java
public DataAwsResiliencehubv2PolicyAvailabilitySloList getAvailabilitySlo();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloList">DataAwsResiliencehubv2PolicyAvailabilitySloList</a>

---

##### `dataRecovery`<sup>Required</sup> <a name="dataRecovery" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.dataRecovery"></a>

```java
public DataAwsResiliencehubv2PolicyDataRecoveryList getDataRecovery();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryList">DataAwsResiliencehubv2PolicyDataRecoveryList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `multiAz`<sup>Required</sup> <a name="multiAz" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.multiAz"></a>

```java
public DataAwsResiliencehubv2PolicyMultiAzList getMultiAz();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzList">DataAwsResiliencehubv2PolicyMultiAzList</a>

---

##### `multiRegion`<sup>Required</sup> <a name="multiRegion" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.multiRegion"></a>

```java
public DataAwsResiliencehubv2PolicyMultiRegionList getMultiRegion();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionList">DataAwsResiliencehubv2PolicyMultiRegionList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.tags"></a>

```java
public StringMap getTags();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.arnInput"></a>

```java
public java.lang.String getArnInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsResiliencehubv2PolicyAvailabilitySlo <a name="DataAwsResiliencehubv2PolicyAvailabilitySlo" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySlo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySlo.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_resiliencehubv2_policy.DataAwsResiliencehubv2PolicyAvailabilitySlo;

DataAwsResiliencehubv2PolicyAvailabilitySlo.builder()
    .build();
```


### DataAwsResiliencehubv2PolicyConfig <a name="DataAwsResiliencehubv2PolicyConfig" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_resiliencehubv2_policy.DataAwsResiliencehubv2PolicyConfig;

DataAwsResiliencehubv2PolicyConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .arn(java.lang.String)
//  .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyConfig.property.arn">arn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/resiliencehubv2_policy#arn DataAwsResiliencehubv2Policy#arn}. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyConfig.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/resiliencehubv2_policy#arn DataAwsResiliencehubv2Policy#arn}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/resiliencehubv2_policy#region DataAwsResiliencehubv2Policy#region}

---

### DataAwsResiliencehubv2PolicyDataRecovery <a name="DataAwsResiliencehubv2PolicyDataRecovery" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecovery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecovery.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_resiliencehubv2_policy.DataAwsResiliencehubv2PolicyDataRecovery;

DataAwsResiliencehubv2PolicyDataRecovery.builder()
    .build();
```


### DataAwsResiliencehubv2PolicyMultiAz <a name="DataAwsResiliencehubv2PolicyMultiAz" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAz"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAz.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_resiliencehubv2_policy.DataAwsResiliencehubv2PolicyMultiAz;

DataAwsResiliencehubv2PolicyMultiAz.builder()
    .build();
```


### DataAwsResiliencehubv2PolicyMultiRegion <a name="DataAwsResiliencehubv2PolicyMultiRegion" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegion.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_resiliencehubv2_policy.DataAwsResiliencehubv2PolicyMultiRegion;

DataAwsResiliencehubv2PolicyMultiRegion.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsResiliencehubv2PolicyAvailabilitySloList <a name="DataAwsResiliencehubv2PolicyAvailabilitySloList" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_resiliencehubv2_policy.DataAwsResiliencehubv2PolicyAvailabilitySloList;

new DataAwsResiliencehubv2PolicyAvailabilitySloList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloList.get"></a>

```java
public DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference <a name="DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_resiliencehubv2_policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference;

new DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.property.target">target</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySlo">DataAwsResiliencehubv2PolicyAvailabilitySlo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.property.target"></a>

```java
public java.lang.Number getTarget();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.property.internalValue"></a>

```java
public DataAwsResiliencehubv2PolicyAvailabilitySlo getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySlo">DataAwsResiliencehubv2PolicyAvailabilitySlo</a>

---


### DataAwsResiliencehubv2PolicyDataRecoveryList <a name="DataAwsResiliencehubv2PolicyDataRecoveryList" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_resiliencehubv2_policy.DataAwsResiliencehubv2PolicyDataRecoveryList;

new DataAwsResiliencehubv2PolicyDataRecoveryList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryList.get"></a>

```java
public DataAwsResiliencehubv2PolicyDataRecoveryOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsResiliencehubv2PolicyDataRecoveryOutputReference <a name="DataAwsResiliencehubv2PolicyDataRecoveryOutputReference" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_resiliencehubv2_policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference;

new DataAwsResiliencehubv2PolicyDataRecoveryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.property.timeBetweenBackupsInMinutes">timeBetweenBackupsInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecovery">DataAwsResiliencehubv2PolicyDataRecovery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `timeBetweenBackupsInMinutes`<sup>Required</sup> <a name="timeBetweenBackupsInMinutes" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.property.timeBetweenBackupsInMinutes"></a>

```java
public java.lang.Number getTimeBetweenBackupsInMinutes();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.property.internalValue"></a>

```java
public DataAwsResiliencehubv2PolicyDataRecovery getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecovery">DataAwsResiliencehubv2PolicyDataRecovery</a>

---


### DataAwsResiliencehubv2PolicyMultiAzList <a name="DataAwsResiliencehubv2PolicyMultiAzList" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_resiliencehubv2_policy.DataAwsResiliencehubv2PolicyMultiAzList;

new DataAwsResiliencehubv2PolicyMultiAzList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzList.get"></a>

```java
public DataAwsResiliencehubv2PolicyMultiAzOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsResiliencehubv2PolicyMultiAzOutputReference <a name="DataAwsResiliencehubv2PolicyMultiAzOutputReference" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_resiliencehubv2_policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference;

new DataAwsResiliencehubv2PolicyMultiAzOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.property.disasterRecoveryApproach">disasterRecoveryApproach</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.property.rpoInMinutes">rpoInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.property.rtoInMinutes">rtoInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAz">DataAwsResiliencehubv2PolicyMultiAz</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `disasterRecoveryApproach`<sup>Required</sup> <a name="disasterRecoveryApproach" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.property.disasterRecoveryApproach"></a>

```java
public java.lang.String getDisasterRecoveryApproach();
```

- *Type:* java.lang.String

---

##### `rpoInMinutes`<sup>Required</sup> <a name="rpoInMinutes" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.property.rpoInMinutes"></a>

```java
public java.lang.Number getRpoInMinutes();
```

- *Type:* java.lang.Number

---

##### `rtoInMinutes`<sup>Required</sup> <a name="rtoInMinutes" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.property.rtoInMinutes"></a>

```java
public java.lang.Number getRtoInMinutes();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.property.internalValue"></a>

```java
public DataAwsResiliencehubv2PolicyMultiAz getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAz">DataAwsResiliencehubv2PolicyMultiAz</a>

---


### DataAwsResiliencehubv2PolicyMultiRegionList <a name="DataAwsResiliencehubv2PolicyMultiRegionList" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_resiliencehubv2_policy.DataAwsResiliencehubv2PolicyMultiRegionList;

new DataAwsResiliencehubv2PolicyMultiRegionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionList.get"></a>

```java
public DataAwsResiliencehubv2PolicyMultiRegionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsResiliencehubv2PolicyMultiRegionOutputReference <a name="DataAwsResiliencehubv2PolicyMultiRegionOutputReference" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_resiliencehubv2_policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference;

new DataAwsResiliencehubv2PolicyMultiRegionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.property.disasterRecoveryApproach">disasterRecoveryApproach</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.property.rpoInMinutes">rpoInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.property.rtoInMinutes">rtoInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegion">DataAwsResiliencehubv2PolicyMultiRegion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `disasterRecoveryApproach`<sup>Required</sup> <a name="disasterRecoveryApproach" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.property.disasterRecoveryApproach"></a>

```java
public java.lang.String getDisasterRecoveryApproach();
```

- *Type:* java.lang.String

---

##### `rpoInMinutes`<sup>Required</sup> <a name="rpoInMinutes" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.property.rpoInMinutes"></a>

```java
public java.lang.Number getRpoInMinutes();
```

- *Type:* java.lang.Number

---

##### `rtoInMinutes`<sup>Required</sup> <a name="rtoInMinutes" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.property.rtoInMinutes"></a>

```java
public java.lang.Number getRtoInMinutes();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.property.internalValue"></a>

```java
public DataAwsResiliencehubv2PolicyMultiRegion getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegion">DataAwsResiliencehubv2PolicyMultiRegion</a>

---



