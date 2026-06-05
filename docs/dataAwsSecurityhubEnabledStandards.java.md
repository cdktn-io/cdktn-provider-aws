# `dataAwsSecurityhubEnabledStandards` Submodule <a name="`dataAwsSecurityhubEnabledStandards` Submodule" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsSecurityhubEnabledStandards <a name="DataAwsSecurityhubEnabledStandards" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/securityhub_enabled_standards aws_securityhub_enabled_standards}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_securityhub_enabled_standards.DataAwsSecurityhubEnabledStandards;

DataAwsSecurityhubEnabledStandards.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .region(java.lang.String)
//  .standardsSubscriptionArns(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.Initializer.parameter.standardsSubscriptionArns">standardsSubscriptionArns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/securityhub_enabled_standards#standards_subscription_arns DataAwsSecurityhubEnabledStandards#standards_subscription_arns}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/securityhub_enabled_standards#region DataAwsSecurityhubEnabledStandards#region}

---

##### `standardsSubscriptionArns`<sup>Optional</sup> <a name="standardsSubscriptionArns" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.Initializer.parameter.standardsSubscriptionArns"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/securityhub_enabled_standards#standards_subscription_arns DataAwsSecurityhubEnabledStandards#standards_subscription_arns}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.resetStandardsSubscriptionArns">resetStandardsSubscriptionArns</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetStandardsSubscriptionArns` <a name="resetStandardsSubscriptionArns" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.resetStandardsSubscriptionArns"></a>

```java
public void resetStandardsSubscriptionArns()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsSecurityhubEnabledStandards resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.isConstruct"></a>

```java
import io.cdktn.providers.aws.data_aws_securityhub_enabled_standards.DataAwsSecurityhubEnabledStandards;

DataAwsSecurityhubEnabledStandards.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.data_aws_securityhub_enabled_standards.DataAwsSecurityhubEnabledStandards;

DataAwsSecurityhubEnabledStandards.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.isTerraformDataSource"></a>

```java
import io.cdktn.providers.aws.data_aws_securityhub_enabled_standards.DataAwsSecurityhubEnabledStandards;

DataAwsSecurityhubEnabledStandards.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.data_aws_securityhub_enabled_standards.DataAwsSecurityhubEnabledStandards;

DataAwsSecurityhubEnabledStandards.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsSecurityhubEnabledStandards.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsSecurityhubEnabledStandards resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsSecurityhubEnabledStandards to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsSecurityhubEnabledStandards that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/securityhub_enabled_standards#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsSecurityhubEnabledStandards to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.standardsSubscriptions">standardsSubscriptions</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList">DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.standardsSubscriptionArnsInput">standardsSubscriptionArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.standardsSubscriptionArns">standardsSubscriptionArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `standardsSubscriptions`<sup>Required</sup> <a name="standardsSubscriptions" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.standardsSubscriptions"></a>

```java
public DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList getStandardsSubscriptions();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList">DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList</a>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `standardsSubscriptionArnsInput`<sup>Optional</sup> <a name="standardsSubscriptionArnsInput" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.standardsSubscriptionArnsInput"></a>

```java
public java.util.List<java.lang.String> getStandardsSubscriptionArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `standardsSubscriptionArns`<sup>Required</sup> <a name="standardsSubscriptionArns" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.standardsSubscriptionArns"></a>

```java
public java.util.List<java.lang.String> getStandardsSubscriptionArns();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandards.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsSecurityhubEnabledStandardsConfig <a name="DataAwsSecurityhubEnabledStandardsConfig" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_securityhub_enabled_standards.DataAwsSecurityhubEnabledStandardsConfig;

DataAwsSecurityhubEnabledStandardsConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .region(java.lang.String)
//  .standardsSubscriptionArns(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsConfig.property.standardsSubscriptionArns">standardsSubscriptionArns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/securityhub_enabled_standards#standards_subscription_arns DataAwsSecurityhubEnabledStandards#standards_subscription_arns}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/securityhub_enabled_standards#region DataAwsSecurityhubEnabledStandards#region}

---

##### `standardsSubscriptionArns`<sup>Optional</sup> <a name="standardsSubscriptionArns" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsConfig.property.standardsSubscriptionArns"></a>

```java
public java.util.List<java.lang.String> getStandardsSubscriptionArns();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/securityhub_enabled_standards#standards_subscription_arns DataAwsSecurityhubEnabledStandards#standards_subscription_arns}.

---

### DataAwsSecurityhubEnabledStandardsStandardsSubscriptions <a name="DataAwsSecurityhubEnabledStandardsStandardsSubscriptions" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptions.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_securityhub_enabled_standards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptions;

DataAwsSecurityhubEnabledStandardsStandardsSubscriptions.builder()
    .build();
```


### DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReason <a name="DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReason" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReason"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReason.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_securityhub_enabled_standards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReason;

DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReason.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList <a name="DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_securityhub_enabled_standards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList;

new DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList.get"></a>

```java
public DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference <a name="DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_securityhub_enabled_standards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference;

new DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.property.standardsArn">standardsArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.property.standardsControlsUpdatable">standardsControlsUpdatable</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.property.standardsInputs">standardsInputs</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.property.standardsStatus">standardsStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.property.standardsStatusReason">standardsStatusReason</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList">DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.property.standardsSubscriptionArn">standardsSubscriptionArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptions">DataAwsSecurityhubEnabledStandardsStandardsSubscriptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `standardsArn`<sup>Required</sup> <a name="standardsArn" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.property.standardsArn"></a>

```java
public java.lang.String getStandardsArn();
```

- *Type:* java.lang.String

---

##### `standardsControlsUpdatable`<sup>Required</sup> <a name="standardsControlsUpdatable" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.property.standardsControlsUpdatable"></a>

```java
public java.lang.String getStandardsControlsUpdatable();
```

- *Type:* java.lang.String

---

##### `standardsInputs`<sup>Required</sup> <a name="standardsInputs" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.property.standardsInputs"></a>

```java
public StringMap getStandardsInputs();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `standardsStatus`<sup>Required</sup> <a name="standardsStatus" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.property.standardsStatus"></a>

```java
public java.lang.String getStandardsStatus();
```

- *Type:* java.lang.String

---

##### `standardsStatusReason`<sup>Required</sup> <a name="standardsStatusReason" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.property.standardsStatusReason"></a>

```java
public DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList getStandardsStatusReason();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList">DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList</a>

---

##### `standardsSubscriptionArn`<sup>Required</sup> <a name="standardsSubscriptionArn" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.property.standardsSubscriptionArn"></a>

```java
public java.lang.String getStandardsSubscriptionArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsOutputReference.property.internalValue"></a>

```java
public DataAwsSecurityhubEnabledStandardsStandardsSubscriptions getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptions">DataAwsSecurityhubEnabledStandardsStandardsSubscriptions</a>

---


### DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList <a name="DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_securityhub_enabled_standards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList;

new DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList.get"></a>

```java
public DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference <a name="DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_securityhub_enabled_standards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference;

new DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.property.statusReasonCode">statusReasonCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReason">DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReason</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `statusReasonCode`<sup>Required</sup> <a name="statusReasonCode" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.property.statusReasonCode"></a>

```java
public java.lang.String getStatusReasonCode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReasonOutputReference.property.internalValue"></a>

```java
public DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReason getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsSecurityhubEnabledStandards.DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReason">DataAwsSecurityhubEnabledStandardsStandardsSubscriptionsStandardsStatusReason</a>

---



