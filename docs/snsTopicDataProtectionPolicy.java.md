# `snsTopicDataProtectionPolicy` Submodule <a name="`snsTopicDataProtectionPolicy` Submodule" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SnsTopicDataProtectionPolicy <a name="SnsTopicDataProtectionPolicy" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/sns_topic_data_protection_policy aws_sns_topic_data_protection_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.Initializer"></a>

```java
import io.cdktn.providers.aws.sns_topic_data_protection_policy.SnsTopicDataProtectionPolicy;

SnsTopicDataProtectionPolicy.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .arn(java.lang.String)
    .policy(java.lang.String)
//  .id(java.lang.String)
//  .region(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.Initializer.parameter.arn">arn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/sns_topic_data_protection_policy#arn SnsTopicDataProtectionPolicy#arn}. |
| <code><a href="#@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.Initializer.parameter.policy">policy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/sns_topic_data_protection_policy#policy SnsTopicDataProtectionPolicy#policy}. |
| <code><a href="#@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/sns_topic_data_protection_policy#id SnsTopicDataProtectionPolicy#id}. |
| <code><a href="#@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.Initializer.parameter.arn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/sns_topic_data_protection_policy#arn SnsTopicDataProtectionPolicy#arn}.

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.Initializer.parameter.policy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/sns_topic_data_protection_policy#policy SnsTopicDataProtectionPolicy#policy}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/sns_topic_data_protection_policy#id SnsTopicDataProtectionPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/sns_topic_data_protection_policy#region SnsTopicDataProtectionPolicy#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.resetId"></a>

```java
public void resetId()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.resetRegion"></a>

```java
public void resetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SnsTopicDataProtectionPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.isConstruct"></a>

```java
import io.cdktn.providers.aws.sns_topic_data_protection_policy.SnsTopicDataProtectionPolicy;

SnsTopicDataProtectionPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.sns_topic_data_protection_policy.SnsTopicDataProtectionPolicy;

SnsTopicDataProtectionPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.sns_topic_data_protection_policy.SnsTopicDataProtectionPolicy;

SnsTopicDataProtectionPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.sns_topic_data_protection_policy.SnsTopicDataProtectionPolicy;

SnsTopicDataProtectionPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SnsTopicDataProtectionPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SnsTopicDataProtectionPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SnsTopicDataProtectionPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SnsTopicDataProtectionPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/sns_topic_data_protection_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SnsTopicDataProtectionPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.property.arnInput">arnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.property.policyInput">policyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.property.policy">policy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.property.arnInput"></a>

```java
public java.lang.String getArnInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `policyInput`<sup>Optional</sup> <a name="policyInput" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.property.policyInput"></a>

```java
public java.lang.String getPolicyInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.property.policy"></a>

```java
public java.lang.String getPolicy();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SnsTopicDataProtectionPolicyConfig <a name="SnsTopicDataProtectionPolicyConfig" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicyConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.sns_topic_data_protection_policy.SnsTopicDataProtectionPolicyConfig;

SnsTopicDataProtectionPolicyConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .arn(java.lang.String)
    .policy(java.lang.String)
//  .id(java.lang.String)
//  .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicyConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicyConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicyConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicyConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicyConfig.property.arn">arn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/sns_topic_data_protection_policy#arn SnsTopicDataProtectionPolicy#arn}. |
| <code><a href="#@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicyConfig.property.policy">policy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/sns_topic_data_protection_policy#policy SnsTopicDataProtectionPolicy#policy}. |
| <code><a href="#@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/sns_topic_data_protection_policy#id SnsTopicDataProtectionPolicy#id}. |
| <code><a href="#@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicyConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicyConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicyConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicyConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicyConfig.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/sns_topic_data_protection_policy#arn SnsTopicDataProtectionPolicy#arn}.

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicyConfig.property.policy"></a>

```java
public java.lang.String getPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/sns_topic_data_protection_policy#policy SnsTopicDataProtectionPolicy#policy}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/sns_topic_data_protection_policy#id SnsTopicDataProtectionPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.snsTopicDataProtectionPolicy.SnsTopicDataProtectionPolicyConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/sns_topic_data_protection_policy#region SnsTopicDataProtectionPolicy#region}

---



