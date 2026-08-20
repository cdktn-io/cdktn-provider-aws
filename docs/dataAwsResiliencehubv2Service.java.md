# `dataAwsResiliencehubv2Service` Submodule <a name="`dataAwsResiliencehubv2Service` Submodule" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsResiliencehubv2Service <a name="DataAwsResiliencehubv2Service" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/resiliencehubv2_service aws_resiliencehubv2_service}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_resiliencehubv2_service.DataAwsResiliencehubv2Service;

DataAwsResiliencehubv2Service.Builder.create(Construct scope, java.lang.String id)
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
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.Initializer.parameter.arn">arn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/resiliencehubv2_service#arn DataAwsResiliencehubv2Service#arn}. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.Initializer.parameter.arn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/resiliencehubv2_service#arn DataAwsResiliencehubv2Service#arn}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/resiliencehubv2_service#region DataAwsResiliencehubv2Service#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.resetRegion"></a>

```java
public void resetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsResiliencehubv2Service resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.isConstruct"></a>

```java
import io.cdktn.providers.aws.data_aws_resiliencehubv2_service.DataAwsResiliencehubv2Service;

DataAwsResiliencehubv2Service.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.data_aws_resiliencehubv2_service.DataAwsResiliencehubv2Service;

DataAwsResiliencehubv2Service.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.isTerraformDataSource"></a>

```java
import io.cdktn.providers.aws.data_aws_resiliencehubv2_service.DataAwsResiliencehubv2Service;

DataAwsResiliencehubv2Service.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.data_aws_resiliencehubv2_service.DataAwsResiliencehubv2Service;

DataAwsResiliencehubv2Service.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsResiliencehubv2Service.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsResiliencehubv2Service resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsResiliencehubv2Service to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsResiliencehubv2Service that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/resiliencehubv2_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsResiliencehubv2Service to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.associatedSystem">associatedSystem</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemList">DataAwsResiliencehubv2ServiceAssociatedSystemList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.permissionModel">permissionModel</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelList">DataAwsResiliencehubv2ServicePermissionModelList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.policyArn">policyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.regions">regions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.tags">tags</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.arnInput">arnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `associatedSystem`<sup>Required</sup> <a name="associatedSystem" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.associatedSystem"></a>

```java
public DataAwsResiliencehubv2ServiceAssociatedSystemList getAssociatedSystem();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemList">DataAwsResiliencehubv2ServiceAssociatedSystemList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `permissionModel`<sup>Required</sup> <a name="permissionModel" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.permissionModel"></a>

```java
public DataAwsResiliencehubv2ServicePermissionModelList getPermissionModel();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelList">DataAwsResiliencehubv2ServicePermissionModelList</a>

---

##### `policyArn`<sup>Required</sup> <a name="policyArn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.policyArn"></a>

```java
public java.lang.String getPolicyArn();
```

- *Type:* java.lang.String

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.regions"></a>

```java
public java.util.List<java.lang.String> getRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.tags"></a>

```java
public StringMap getTags();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.arnInput"></a>

```java
public java.lang.String getArnInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsResiliencehubv2ServiceAssociatedSystem <a name="DataAwsResiliencehubv2ServiceAssociatedSystem" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystem"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystem.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_resiliencehubv2_service.DataAwsResiliencehubv2ServiceAssociatedSystem;

DataAwsResiliencehubv2ServiceAssociatedSystem.builder()
    .build();
```


### DataAwsResiliencehubv2ServiceConfig <a name="DataAwsResiliencehubv2ServiceConfig" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_resiliencehubv2_service.DataAwsResiliencehubv2ServiceConfig;

DataAwsResiliencehubv2ServiceConfig.builder()
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
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceConfig.property.arn">arn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/resiliencehubv2_service#arn DataAwsResiliencehubv2Service#arn}. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceConfig.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/resiliencehubv2_service#arn DataAwsResiliencehubv2Service#arn}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/resiliencehubv2_service#region DataAwsResiliencehubv2Service#region}

---

### DataAwsResiliencehubv2ServicePermissionModel <a name="DataAwsResiliencehubv2ServicePermissionModel" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModel.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_resiliencehubv2_service.DataAwsResiliencehubv2ServicePermissionModel;

DataAwsResiliencehubv2ServicePermissionModel.builder()
    .build();
```


### DataAwsResiliencehubv2ServicePermissionModelCrossAccountRole <a name="DataAwsResiliencehubv2ServicePermissionModelCrossAccountRole" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRole"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRole.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_resiliencehubv2_service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRole;

DataAwsResiliencehubv2ServicePermissionModelCrossAccountRole.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsResiliencehubv2ServiceAssociatedSystemList <a name="DataAwsResiliencehubv2ServiceAssociatedSystemList" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_resiliencehubv2_service.DataAwsResiliencehubv2ServiceAssociatedSystemList;

new DataAwsResiliencehubv2ServiceAssociatedSystemList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemList.get"></a>

```java
public DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference <a name="DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_resiliencehubv2_service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference;

new DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.property.systemArn">systemArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystem">DataAwsResiliencehubv2ServiceAssociatedSystem</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `systemArn`<sup>Required</sup> <a name="systemArn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.property.systemArn"></a>

```java
public java.lang.String getSystemArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.property.internalValue"></a>

```java
public DataAwsResiliencehubv2ServiceAssociatedSystem getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystem">DataAwsResiliencehubv2ServiceAssociatedSystem</a>

---


### DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleList <a name="DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleList" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_resiliencehubv2_service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleList;

new DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleList.get"></a>

```java
public DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference <a name="DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_resiliencehubv2_service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference;

new DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.property.crossAccountRoleArn">crossAccountRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.property.externalId">externalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRole">DataAwsResiliencehubv2ServicePermissionModelCrossAccountRole</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `crossAccountRoleArn`<sup>Required</sup> <a name="crossAccountRoleArn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.property.crossAccountRoleArn"></a>

```java
public java.lang.String getCrossAccountRoleArn();
```

- *Type:* java.lang.String

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.property.externalId"></a>

```java
public java.lang.String getExternalId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.property.internalValue"></a>

```java
public DataAwsResiliencehubv2ServicePermissionModelCrossAccountRole getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRole">DataAwsResiliencehubv2ServicePermissionModelCrossAccountRole</a>

---


### DataAwsResiliencehubv2ServicePermissionModelList <a name="DataAwsResiliencehubv2ServicePermissionModelList" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_resiliencehubv2_service.DataAwsResiliencehubv2ServicePermissionModelList;

new DataAwsResiliencehubv2ServicePermissionModelList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelList.get"></a>

```java
public DataAwsResiliencehubv2ServicePermissionModelOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsResiliencehubv2ServicePermissionModelOutputReference <a name="DataAwsResiliencehubv2ServicePermissionModelOutputReference" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_resiliencehubv2_service.DataAwsResiliencehubv2ServicePermissionModelOutputReference;

new DataAwsResiliencehubv2ServicePermissionModelOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.property.crossAccountRole">crossAccountRole</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleList">DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.property.invokerRoleName">invokerRoleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModel">DataAwsResiliencehubv2ServicePermissionModel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `crossAccountRole`<sup>Required</sup> <a name="crossAccountRole" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.property.crossAccountRole"></a>

```java
public DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleList getCrossAccountRole();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleList">DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleList</a>

---

##### `invokerRoleName`<sup>Required</sup> <a name="invokerRoleName" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.property.invokerRoleName"></a>

```java
public java.lang.String getInvokerRoleName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.property.internalValue"></a>

```java
public DataAwsResiliencehubv2ServicePermissionModel getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModel">DataAwsResiliencehubv2ServicePermissionModel</a>

---



