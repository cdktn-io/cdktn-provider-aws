# `securityhubStandardsSubscription` Submodule <a name="`securityhubStandardsSubscription` Submodule" id="@cdktn/provider-aws.securityhubStandardsSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityhubStandardsSubscription <a name="SecurityhubStandardsSubscription" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/securityhub_standards_subscription aws_securityhub_standards_subscription}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.Initializer"></a>

```java
import io.cdktn.providers.aws.securityhub_standards_subscription.SecurityhubStandardsSubscription;

SecurityhubStandardsSubscription.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .standardsArn(java.lang.String)
//  .id(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(SecurityhubStandardsSubscriptionTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.Initializer.parameter.standardsArn">standardsArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/securityhub_standards_subscription#standards_arn SecurityhubStandardsSubscription#standards_arn}. |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/securityhub_standards_subscription#id SecurityhubStandardsSubscription#id}. |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeouts">SecurityhubStandardsSubscriptionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `standardsArn`<sup>Required</sup> <a name="standardsArn" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.Initializer.parameter.standardsArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/securityhub_standards_subscription#standards_arn SecurityhubStandardsSubscription#standards_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/securityhub_standards_subscription#id SecurityhubStandardsSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/securityhub_standards_subscription#region SecurityhubStandardsSubscription#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeouts">SecurityhubStandardsSubscriptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/securityhub_standards_subscription#timeouts SecurityhubStandardsSubscription#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.putTimeouts"></a>

```java
public void putTimeouts(SecurityhubStandardsSubscriptionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeouts">SecurityhubStandardsSubscriptionTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.resetId"></a>

```java
public void resetId()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SecurityhubStandardsSubscription resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.isConstruct"></a>

```java
import io.cdktn.providers.aws.securityhub_standards_subscription.SecurityhubStandardsSubscription;

SecurityhubStandardsSubscription.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.securityhub_standards_subscription.SecurityhubStandardsSubscription;

SecurityhubStandardsSubscription.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.securityhub_standards_subscription.SecurityhubStandardsSubscription;

SecurityhubStandardsSubscription.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.securityhub_standards_subscription.SecurityhubStandardsSubscription;

SecurityhubStandardsSubscription.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SecurityhubStandardsSubscription.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SecurityhubStandardsSubscription resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SecurityhubStandardsSubscription to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SecurityhubStandardsSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/securityhub_standards_subscription#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SecurityhubStandardsSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference">SecurityhubStandardsSubscriptionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.property.standardsArnInput">standardsArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeouts">SecurityhubStandardsSubscriptionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.property.standardsArn">standardsArn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.property.timeouts"></a>

```java
public SecurityhubStandardsSubscriptionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference">SecurityhubStandardsSubscriptionTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `standardsArnInput`<sup>Optional</sup> <a name="standardsArnInput" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.property.standardsArnInput"></a>

```java
public java.lang.String getStandardsArnInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.property.timeoutsInput"></a>

```java
public IResolvable|SecurityhubStandardsSubscriptionTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeouts">SecurityhubStandardsSubscriptionTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `standardsArn`<sup>Required</sup> <a name="standardsArn" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.property.standardsArn"></a>

```java
public java.lang.String getStandardsArn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscription.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityhubStandardsSubscriptionConfig <a name="SecurityhubStandardsSubscriptionConfig" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.securityhub_standards_subscription.SecurityhubStandardsSubscriptionConfig;

SecurityhubStandardsSubscriptionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .standardsArn(java.lang.String)
//  .id(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(SecurityhubStandardsSubscriptionTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionConfig.property.standardsArn">standardsArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/securityhub_standards_subscription#standards_arn SecurityhubStandardsSubscription#standards_arn}. |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/securityhub_standards_subscription#id SecurityhubStandardsSubscription#id}. |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeouts">SecurityhubStandardsSubscriptionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `standardsArn`<sup>Required</sup> <a name="standardsArn" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionConfig.property.standardsArn"></a>

```java
public java.lang.String getStandardsArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/securityhub_standards_subscription#standards_arn SecurityhubStandardsSubscription#standards_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/securityhub_standards_subscription#id SecurityhubStandardsSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/securityhub_standards_subscription#region SecurityhubStandardsSubscription#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionConfig.property.timeouts"></a>

```java
public SecurityhubStandardsSubscriptionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeouts">SecurityhubStandardsSubscriptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/securityhub_standards_subscription#timeouts SecurityhubStandardsSubscription#timeouts}

---

### SecurityhubStandardsSubscriptionTimeouts <a name="SecurityhubStandardsSubscriptionTimeouts" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.securityhub_standards_subscription.SecurityhubStandardsSubscriptionTimeouts;

SecurityhubStandardsSubscriptionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/securityhub_standards_subscription#create SecurityhubStandardsSubscription#create}. |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/securityhub_standards_subscription#delete SecurityhubStandardsSubscription#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/securityhub_standards_subscription#create SecurityhubStandardsSubscription#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/securityhub_standards_subscription#delete SecurityhubStandardsSubscription#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityhubStandardsSubscriptionTimeoutsOutputReference <a name="SecurityhubStandardsSubscriptionTimeoutsOutputReference" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.securityhub_standards_subscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference;

new SecurityhubStandardsSubscriptionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeouts">SecurityhubStandardsSubscriptionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|SecurityhubStandardsSubscriptionTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.securityhubStandardsSubscription.SecurityhubStandardsSubscriptionTimeouts">SecurityhubStandardsSubscriptionTimeouts</a>

---



