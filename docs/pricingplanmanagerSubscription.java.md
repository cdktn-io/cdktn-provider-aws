# `pricingplanmanagerSubscription` Submodule <a name="`pricingplanmanagerSubscription` Submodule" id="@cdktn/provider-aws.pricingplanmanagerSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PricingplanmanagerSubscription <a name="PricingplanmanagerSubscription" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/pricingplanmanager_subscription aws_pricingplanmanager_subscription}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.Initializer"></a>

```java
import io.cdktn.providers.aws.pricingplanmanager_subscription.PricingplanmanagerSubscription;

PricingplanmanagerSubscription.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .planFamily(java.lang.String)
    .planTier(java.lang.String)
    .resourceArns(java.util.List<java.lang.String>)
//  .approvalMode(java.lang.String)
//  .timeouts(PricingplanmanagerSubscriptionTimeouts)
//  .usageLevel(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.Initializer.parameter.planFamily">planFamily</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/pricingplanmanager_subscription#plan_family PricingplanmanagerSubscription#plan_family}. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.Initializer.parameter.planTier">planTier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/pricingplanmanager_subscription#plan_tier PricingplanmanagerSubscription#plan_tier}. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.Initializer.parameter.resourceArns">resourceArns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/pricingplanmanager_subscription#resource_arns PricingplanmanagerSubscription#resource_arns}. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.Initializer.parameter.approvalMode">approvalMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/pricingplanmanager_subscription#approval_mode PricingplanmanagerSubscription#approval_mode}. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeouts">PricingplanmanagerSubscriptionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.Initializer.parameter.usageLevel">usageLevel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/pricingplanmanager_subscription#usage_level PricingplanmanagerSubscription#usage_level}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `planFamily`<sup>Required</sup> <a name="planFamily" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.Initializer.parameter.planFamily"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/pricingplanmanager_subscription#plan_family PricingplanmanagerSubscription#plan_family}.

---

##### `planTier`<sup>Required</sup> <a name="planTier" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.Initializer.parameter.planTier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/pricingplanmanager_subscription#plan_tier PricingplanmanagerSubscription#plan_tier}.

---

##### `resourceArns`<sup>Required</sup> <a name="resourceArns" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.Initializer.parameter.resourceArns"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/pricingplanmanager_subscription#resource_arns PricingplanmanagerSubscription#resource_arns}.

---

##### `approvalMode`<sup>Optional</sup> <a name="approvalMode" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.Initializer.parameter.approvalMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/pricingplanmanager_subscription#approval_mode PricingplanmanagerSubscription#approval_mode}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeouts">PricingplanmanagerSubscriptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/pricingplanmanager_subscription#timeouts PricingplanmanagerSubscription#timeouts}

---

##### `usageLevel`<sup>Optional</sup> <a name="usageLevel" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.Initializer.parameter.usageLevel"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/pricingplanmanager_subscription#usage_level PricingplanmanagerSubscription#usage_level}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.resetApprovalMode">resetApprovalMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.resetUsageLevel">resetUsageLevel</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.putTimeouts"></a>

```java
public void putTimeouts(PricingplanmanagerSubscriptionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeouts">PricingplanmanagerSubscriptionTimeouts</a>

---

##### `resetApprovalMode` <a name="resetApprovalMode" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.resetApprovalMode"></a>

```java
public void resetApprovalMode()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUsageLevel` <a name="resetUsageLevel" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.resetUsageLevel"></a>

```java
public void resetUsageLevel()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a PricingplanmanagerSubscription resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.isConstruct"></a>

```java
import io.cdktn.providers.aws.pricingplanmanager_subscription.PricingplanmanagerSubscription;

PricingplanmanagerSubscription.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.pricingplanmanager_subscription.PricingplanmanagerSubscription;

PricingplanmanagerSubscription.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.pricingplanmanager_subscription.PricingplanmanagerSubscription;

PricingplanmanagerSubscription.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.pricingplanmanager_subscription.PricingplanmanagerSubscription;

PricingplanmanagerSubscription.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),PricingplanmanagerSubscription.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a PricingplanmanagerSubscription resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the PricingplanmanagerSubscription to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing PricingplanmanagerSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/pricingplanmanager_subscription#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the PricingplanmanagerSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.scheduledChange">scheduledChange</a></code> | <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList">PricingplanmanagerSubscriptionScheduledChangeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.statusReason">statusReason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference">PricingplanmanagerSubscriptionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.approvalModeInput">approvalModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.planFamilyInput">planFamilyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.planTierInput">planTierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.resourceArnsInput">resourceArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeouts">PricingplanmanagerSubscriptionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.usageLevelInput">usageLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.approvalMode">approvalMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.planFamily">planFamily</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.planTier">planTier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.resourceArns">resourceArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.usageLevel">usageLevel</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `scheduledChange`<sup>Required</sup> <a name="scheduledChange" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.scheduledChange"></a>

```java
public PricingplanmanagerSubscriptionScheduledChangeList getScheduledChange();
```

- *Type:* <a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList">PricingplanmanagerSubscriptionScheduledChangeList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `statusReason`<sup>Required</sup> <a name="statusReason" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.statusReason"></a>

```java
public java.lang.String getStatusReason();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.timeouts"></a>

```java
public PricingplanmanagerSubscriptionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference">PricingplanmanagerSubscriptionTimeoutsOutputReference</a>

---

##### `approvalModeInput`<sup>Optional</sup> <a name="approvalModeInput" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.approvalModeInput"></a>

```java
public java.lang.String getApprovalModeInput();
```

- *Type:* java.lang.String

---

##### `planFamilyInput`<sup>Optional</sup> <a name="planFamilyInput" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.planFamilyInput"></a>

```java
public java.lang.String getPlanFamilyInput();
```

- *Type:* java.lang.String

---

##### `planTierInput`<sup>Optional</sup> <a name="planTierInput" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.planTierInput"></a>

```java
public java.lang.String getPlanTierInput();
```

- *Type:* java.lang.String

---

##### `resourceArnsInput`<sup>Optional</sup> <a name="resourceArnsInput" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.resourceArnsInput"></a>

```java
public java.util.List<java.lang.String> getResourceArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.timeoutsInput"></a>

```java
public IResolvable|PricingplanmanagerSubscriptionTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeouts">PricingplanmanagerSubscriptionTimeouts</a>

---

##### `usageLevelInput`<sup>Optional</sup> <a name="usageLevelInput" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.usageLevelInput"></a>

```java
public java.lang.String getUsageLevelInput();
```

- *Type:* java.lang.String

---

##### `approvalMode`<sup>Required</sup> <a name="approvalMode" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.approvalMode"></a>

```java
public java.lang.String getApprovalMode();
```

- *Type:* java.lang.String

---

##### `planFamily`<sup>Required</sup> <a name="planFamily" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.planFamily"></a>

```java
public java.lang.String getPlanFamily();
```

- *Type:* java.lang.String

---

##### `planTier`<sup>Required</sup> <a name="planTier" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.planTier"></a>

```java
public java.lang.String getPlanTier();
```

- *Type:* java.lang.String

---

##### `resourceArns`<sup>Required</sup> <a name="resourceArns" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.resourceArns"></a>

```java
public java.util.List<java.lang.String> getResourceArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `usageLevel`<sup>Required</sup> <a name="usageLevel" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.usageLevel"></a>

```java
public java.lang.String getUsageLevel();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscription.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PricingplanmanagerSubscriptionConfig <a name="PricingplanmanagerSubscriptionConfig" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.pricingplanmanager_subscription.PricingplanmanagerSubscriptionConfig;

PricingplanmanagerSubscriptionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .planFamily(java.lang.String)
    .planTier(java.lang.String)
    .resourceArns(java.util.List<java.lang.String>)
//  .approvalMode(java.lang.String)
//  .timeouts(PricingplanmanagerSubscriptionTimeouts)
//  .usageLevel(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.planFamily">planFamily</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/pricingplanmanager_subscription#plan_family PricingplanmanagerSubscription#plan_family}. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.planTier">planTier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/pricingplanmanager_subscription#plan_tier PricingplanmanagerSubscription#plan_tier}. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.resourceArns">resourceArns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/pricingplanmanager_subscription#resource_arns PricingplanmanagerSubscription#resource_arns}. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.approvalMode">approvalMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/pricingplanmanager_subscription#approval_mode PricingplanmanagerSubscription#approval_mode}. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeouts">PricingplanmanagerSubscriptionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.usageLevel">usageLevel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/pricingplanmanager_subscription#usage_level PricingplanmanagerSubscription#usage_level}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `planFamily`<sup>Required</sup> <a name="planFamily" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.planFamily"></a>

```java
public java.lang.String getPlanFamily();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/pricingplanmanager_subscription#plan_family PricingplanmanagerSubscription#plan_family}.

---

##### `planTier`<sup>Required</sup> <a name="planTier" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.planTier"></a>

```java
public java.lang.String getPlanTier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/pricingplanmanager_subscription#plan_tier PricingplanmanagerSubscription#plan_tier}.

---

##### `resourceArns`<sup>Required</sup> <a name="resourceArns" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.resourceArns"></a>

```java
public java.util.List<java.lang.String> getResourceArns();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/pricingplanmanager_subscription#resource_arns PricingplanmanagerSubscription#resource_arns}.

---

##### `approvalMode`<sup>Optional</sup> <a name="approvalMode" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.approvalMode"></a>

```java
public java.lang.String getApprovalMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/pricingplanmanager_subscription#approval_mode PricingplanmanagerSubscription#approval_mode}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.timeouts"></a>

```java
public PricingplanmanagerSubscriptionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeouts">PricingplanmanagerSubscriptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/pricingplanmanager_subscription#timeouts PricingplanmanagerSubscription#timeouts}

---

##### `usageLevel`<sup>Optional</sup> <a name="usageLevel" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionConfig.property.usageLevel"></a>

```java
public java.lang.String getUsageLevel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/pricingplanmanager_subscription#usage_level PricingplanmanagerSubscription#usage_level}.

---

### PricingplanmanagerSubscriptionScheduledChange <a name="PricingplanmanagerSubscriptionScheduledChange" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChange.Initializer"></a>

```java
import io.cdktn.providers.aws.pricingplanmanager_subscription.PricingplanmanagerSubscriptionScheduledChange;

PricingplanmanagerSubscriptionScheduledChange.builder()
    .build();
```


### PricingplanmanagerSubscriptionTimeouts <a name="PricingplanmanagerSubscriptionTimeouts" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.pricingplanmanager_subscription.PricingplanmanagerSubscriptionTimeouts;

PricingplanmanagerSubscriptionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/pricingplanmanager_subscription#create PricingplanmanagerSubscription#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/pricingplanmanager_subscription#delete PricingplanmanagerSubscription#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/pricingplanmanager_subscription#update PricingplanmanagerSubscription#update}

---

## Classes <a name="Classes" id="Classes"></a>

### PricingplanmanagerSubscriptionScheduledChangeList <a name="PricingplanmanagerSubscriptionScheduledChangeList" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.Initializer"></a>

```java
import io.cdktn.providers.aws.pricingplanmanager_subscription.PricingplanmanagerSubscriptionScheduledChangeList;

new PricingplanmanagerSubscriptionScheduledChangeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.get"></a>

```java
public PricingplanmanagerSubscriptionScheduledChangeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### PricingplanmanagerSubscriptionScheduledChangeOutputReference <a name="PricingplanmanagerSubscriptionScheduledChangeOutputReference" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.pricingplanmanager_subscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference;

new PricingplanmanagerSubscriptionScheduledChangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.property.changeType">changeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.property.effectiveDate">effectiveDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.property.planTier">planTier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.property.usageLevel">usageLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChange">PricingplanmanagerSubscriptionScheduledChange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `changeType`<sup>Required</sup> <a name="changeType" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.property.changeType"></a>

```java
public java.lang.String getChangeType();
```

- *Type:* java.lang.String

---

##### `effectiveDate`<sup>Required</sup> <a name="effectiveDate" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.property.effectiveDate"></a>

```java
public java.lang.String getEffectiveDate();
```

- *Type:* java.lang.String

---

##### `planTier`<sup>Required</sup> <a name="planTier" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.property.planTier"></a>

```java
public java.lang.String getPlanTier();
```

- *Type:* java.lang.String

---

##### `usageLevel`<sup>Required</sup> <a name="usageLevel" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.property.usageLevel"></a>

```java
public java.lang.String getUsageLevel();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChangeOutputReference.property.internalValue"></a>

```java
public PricingplanmanagerSubscriptionScheduledChange getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionScheduledChange">PricingplanmanagerSubscriptionScheduledChange</a>

---


### PricingplanmanagerSubscriptionTimeoutsOutputReference <a name="PricingplanmanagerSubscriptionTimeoutsOutputReference" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.pricingplanmanager_subscription.PricingplanmanagerSubscriptionTimeoutsOutputReference;

new PricingplanmanagerSubscriptionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeouts">PricingplanmanagerSubscriptionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|PricingplanmanagerSubscriptionTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.pricingplanmanagerSubscription.PricingplanmanagerSubscriptionTimeouts">PricingplanmanagerSubscriptionTimeouts</a>

---



