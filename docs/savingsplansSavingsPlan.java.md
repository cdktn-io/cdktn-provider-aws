# `savingsplansSavingsPlan` Submodule <a name="`savingsplansSavingsPlan` Submodule" id="@cdktn/provider-aws.savingsplansSavingsPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SavingsplansSavingsPlan <a name="SavingsplansSavingsPlan" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/resources/savingsplans_savings_plan aws_savingsplans_savings_plan}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.Initializer"></a>

```java
import io.cdktn.providers.aws.savingsplans_savings_plan.SavingsplansSavingsPlan;

SavingsplansSavingsPlan.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .commitment(java.lang.String)
    .savingsPlanOfferingId(java.lang.String)
//  .purchaseTime(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(SavingsplansSavingsPlanTimeouts)
//  .upfrontPaymentAmount(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.Initializer.parameter.commitment">commitment</a></code> | <code>java.lang.String</code> | The hourly commitment, in USD. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.Initializer.parameter.savingsPlanOfferingId">savingsPlanOfferingId</a></code> | <code>java.lang.String</code> | The unique ID of a Savings Plan offering. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.Initializer.parameter.purchaseTime">purchaseTime</a></code> | <code>java.lang.String</code> | The time at which to purchase the Savings Plan, in UTC format (YYYY-MM-DDTHH:MM:SSZ). |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/resources/savingsplans_savings_plan#tags SavingsplansSavingsPlan#tags}. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeouts">SavingsplansSavingsPlanTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.Initializer.parameter.upfrontPaymentAmount">upfrontPaymentAmount</a></code> | <code>java.lang.String</code> | The up-front payment amount. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `commitment`<sup>Required</sup> <a name="commitment" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.Initializer.parameter.commitment"></a>

- *Type:* java.lang.String

The hourly commitment, in USD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/resources/savingsplans_savings_plan#commitment SavingsplansSavingsPlan#commitment}

---

##### `savingsPlanOfferingId`<sup>Required</sup> <a name="savingsPlanOfferingId" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.Initializer.parameter.savingsPlanOfferingId"></a>

- *Type:* java.lang.String

The unique ID of a Savings Plan offering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/resources/savingsplans_savings_plan#savings_plan_offering_id SavingsplansSavingsPlan#savings_plan_offering_id}

---

##### `purchaseTime`<sup>Optional</sup> <a name="purchaseTime" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.Initializer.parameter.purchaseTime"></a>

- *Type:* java.lang.String

The time at which to purchase the Savings Plan, in UTC format (YYYY-MM-DDTHH:MM:SSZ).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/resources/savingsplans_savings_plan#purchase_time SavingsplansSavingsPlan#purchase_time}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/resources/savingsplans_savings_plan#tags SavingsplansSavingsPlan#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeouts">SavingsplansSavingsPlanTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/resources/savingsplans_savings_plan#timeouts SavingsplansSavingsPlan#timeouts}

---

##### `upfrontPaymentAmount`<sup>Optional</sup> <a name="upfrontPaymentAmount" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.Initializer.parameter.upfrontPaymentAmount"></a>

- *Type:* java.lang.String

The up-front payment amount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/resources/savingsplans_savings_plan#upfront_payment_amount SavingsplansSavingsPlan#upfront_payment_amount}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.resetPurchaseTime">resetPurchaseTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.resetUpfrontPaymentAmount">resetUpfrontPaymentAmount</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.putTimeouts"></a>

```java
public void putTimeouts(SavingsplansSavingsPlanTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeouts">SavingsplansSavingsPlanTimeouts</a>

---

##### `resetPurchaseTime` <a name="resetPurchaseTime" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.resetPurchaseTime"></a>

```java
public void resetPurchaseTime()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUpfrontPaymentAmount` <a name="resetUpfrontPaymentAmount" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.resetUpfrontPaymentAmount"></a>

```java
public void resetUpfrontPaymentAmount()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SavingsplansSavingsPlan resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.isConstruct"></a>

```java
import io.cdktn.providers.aws.savingsplans_savings_plan.SavingsplansSavingsPlan;

SavingsplansSavingsPlan.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.savingsplans_savings_plan.SavingsplansSavingsPlan;

SavingsplansSavingsPlan.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.savingsplans_savings_plan.SavingsplansSavingsPlan;

SavingsplansSavingsPlan.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.savingsplans_savings_plan.SavingsplansSavingsPlan;

SavingsplansSavingsPlan.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SavingsplansSavingsPlan.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SavingsplansSavingsPlan resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SavingsplansSavingsPlan to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SavingsplansSavingsPlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/resources/savingsplans_savings_plan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SavingsplansSavingsPlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.currency">currency</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.ec2InstanceFamily">ec2InstanceFamily</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.end">end</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.offeringId">offeringId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.paymentOption">paymentOption</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.productTypes">productTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.recurringPaymentAmount">recurringPaymentAmount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.returnableUntil">returnableUntil</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.savingsPlanArn">savingsPlanArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.savingsPlanId">savingsPlanId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.savingsPlanType">savingsPlanType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.start">start</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.tagsAll">tagsAll</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.termDurationInSeconds">termDurationInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference">SavingsplansSavingsPlanTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.commitmentInput">commitmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.purchaseTimeInput">purchaseTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.savingsPlanOfferingIdInput">savingsPlanOfferingIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeouts">SavingsplansSavingsPlanTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.upfrontPaymentAmountInput">upfrontPaymentAmountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.commitment">commitment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.purchaseTime">purchaseTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.savingsPlanOfferingId">savingsPlanOfferingId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.upfrontPaymentAmount">upfrontPaymentAmount</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `currency`<sup>Required</sup> <a name="currency" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.currency"></a>

```java
public java.lang.String getCurrency();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `ec2InstanceFamily`<sup>Required</sup> <a name="ec2InstanceFamily" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.ec2InstanceFamily"></a>

```java
public java.lang.String getEc2InstanceFamily();
```

- *Type:* java.lang.String

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.end"></a>

```java
public java.lang.String getEnd();
```

- *Type:* java.lang.String

---

##### `offeringId`<sup>Required</sup> <a name="offeringId" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.offeringId"></a>

```java
public java.lang.String getOfferingId();
```

- *Type:* java.lang.String

---

##### `paymentOption`<sup>Required</sup> <a name="paymentOption" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.paymentOption"></a>

```java
public java.lang.String getPaymentOption();
```

- *Type:* java.lang.String

---

##### `productTypes`<sup>Required</sup> <a name="productTypes" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.productTypes"></a>

```java
public java.util.List<java.lang.String> getProductTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `recurringPaymentAmount`<sup>Required</sup> <a name="recurringPaymentAmount" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.recurringPaymentAmount"></a>

```java
public java.lang.String getRecurringPaymentAmount();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `returnableUntil`<sup>Required</sup> <a name="returnableUntil" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.returnableUntil"></a>

```java
public java.lang.String getReturnableUntil();
```

- *Type:* java.lang.String

---

##### `savingsPlanArn`<sup>Required</sup> <a name="savingsPlanArn" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.savingsPlanArn"></a>

```java
public java.lang.String getSavingsPlanArn();
```

- *Type:* java.lang.String

---

##### `savingsPlanId`<sup>Required</sup> <a name="savingsPlanId" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.savingsPlanId"></a>

```java
public java.lang.String getSavingsPlanId();
```

- *Type:* java.lang.String

---

##### `savingsPlanType`<sup>Required</sup> <a name="savingsPlanType" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.savingsPlanType"></a>

```java
public java.lang.String getSavingsPlanType();
```

- *Type:* java.lang.String

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.start"></a>

```java
public java.lang.String getStart();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.tagsAll"></a>

```java
public StringMap getTagsAll();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `termDurationInSeconds`<sup>Required</sup> <a name="termDurationInSeconds" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.termDurationInSeconds"></a>

```java
public java.lang.Number getTermDurationInSeconds();
```

- *Type:* java.lang.Number

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.timeouts"></a>

```java
public SavingsplansSavingsPlanTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference">SavingsplansSavingsPlanTimeoutsOutputReference</a>

---

##### `commitmentInput`<sup>Optional</sup> <a name="commitmentInput" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.commitmentInput"></a>

```java
public java.lang.String getCommitmentInput();
```

- *Type:* java.lang.String

---

##### `purchaseTimeInput`<sup>Optional</sup> <a name="purchaseTimeInput" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.purchaseTimeInput"></a>

```java
public java.lang.String getPurchaseTimeInput();
```

- *Type:* java.lang.String

---

##### `savingsPlanOfferingIdInput`<sup>Optional</sup> <a name="savingsPlanOfferingIdInput" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.savingsPlanOfferingIdInput"></a>

```java
public java.lang.String getSavingsPlanOfferingIdInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.timeoutsInput"></a>

```java
public IResolvable|SavingsplansSavingsPlanTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeouts">SavingsplansSavingsPlanTimeouts</a>

---

##### `upfrontPaymentAmountInput`<sup>Optional</sup> <a name="upfrontPaymentAmountInput" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.upfrontPaymentAmountInput"></a>

```java
public java.lang.String getUpfrontPaymentAmountInput();
```

- *Type:* java.lang.String

---

##### `commitment`<sup>Required</sup> <a name="commitment" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.commitment"></a>

```java
public java.lang.String getCommitment();
```

- *Type:* java.lang.String

---

##### `purchaseTime`<sup>Required</sup> <a name="purchaseTime" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.purchaseTime"></a>

```java
public java.lang.String getPurchaseTime();
```

- *Type:* java.lang.String

---

##### `savingsPlanOfferingId`<sup>Required</sup> <a name="savingsPlanOfferingId" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.savingsPlanOfferingId"></a>

```java
public java.lang.String getSavingsPlanOfferingId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `upfrontPaymentAmount`<sup>Required</sup> <a name="upfrontPaymentAmount" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.upfrontPaymentAmount"></a>

```java
public java.lang.String getUpfrontPaymentAmount();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlan.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SavingsplansSavingsPlanConfig <a name="SavingsplansSavingsPlanConfig" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.savingsplans_savings_plan.SavingsplansSavingsPlanConfig;

SavingsplansSavingsPlanConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .commitment(java.lang.String)
    .savingsPlanOfferingId(java.lang.String)
//  .purchaseTime(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(SavingsplansSavingsPlanTimeouts)
//  .upfrontPaymentAmount(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.commitment">commitment</a></code> | <code>java.lang.String</code> | The hourly commitment, in USD. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.savingsPlanOfferingId">savingsPlanOfferingId</a></code> | <code>java.lang.String</code> | The unique ID of a Savings Plan offering. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.purchaseTime">purchaseTime</a></code> | <code>java.lang.String</code> | The time at which to purchase the Savings Plan, in UTC format (YYYY-MM-DDTHH:MM:SSZ). |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/resources/savingsplans_savings_plan#tags SavingsplansSavingsPlan#tags}. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeouts">SavingsplansSavingsPlanTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.upfrontPaymentAmount">upfrontPaymentAmount</a></code> | <code>java.lang.String</code> | The up-front payment amount. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `commitment`<sup>Required</sup> <a name="commitment" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.commitment"></a>

```java
public java.lang.String getCommitment();
```

- *Type:* java.lang.String

The hourly commitment, in USD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/resources/savingsplans_savings_plan#commitment SavingsplansSavingsPlan#commitment}

---

##### `savingsPlanOfferingId`<sup>Required</sup> <a name="savingsPlanOfferingId" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.savingsPlanOfferingId"></a>

```java
public java.lang.String getSavingsPlanOfferingId();
```

- *Type:* java.lang.String

The unique ID of a Savings Plan offering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/resources/savingsplans_savings_plan#savings_plan_offering_id SavingsplansSavingsPlan#savings_plan_offering_id}

---

##### `purchaseTime`<sup>Optional</sup> <a name="purchaseTime" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.purchaseTime"></a>

```java
public java.lang.String getPurchaseTime();
```

- *Type:* java.lang.String

The time at which to purchase the Savings Plan, in UTC format (YYYY-MM-DDTHH:MM:SSZ).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/resources/savingsplans_savings_plan#purchase_time SavingsplansSavingsPlan#purchase_time}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/resources/savingsplans_savings_plan#tags SavingsplansSavingsPlan#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.timeouts"></a>

```java
public SavingsplansSavingsPlanTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeouts">SavingsplansSavingsPlanTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/resources/savingsplans_savings_plan#timeouts SavingsplansSavingsPlan#timeouts}

---

##### `upfrontPaymentAmount`<sup>Optional</sup> <a name="upfrontPaymentAmount" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanConfig.property.upfrontPaymentAmount"></a>

```java
public java.lang.String getUpfrontPaymentAmount();
```

- *Type:* java.lang.String

The up-front payment amount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/resources/savingsplans_savings_plan#upfront_payment_amount SavingsplansSavingsPlan#upfront_payment_amount}

---

### SavingsplansSavingsPlanTimeouts <a name="SavingsplansSavingsPlanTimeouts" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.savingsplans_savings_plan.SavingsplansSavingsPlanTimeouts;

SavingsplansSavingsPlanTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/resources/savingsplans_savings_plan#create SavingsplansSavingsPlan#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/resources/savingsplans_savings_plan#delete SavingsplansSavingsPlan#delete}

---

## Classes <a name="Classes" id="Classes"></a>

### SavingsplansSavingsPlanTimeoutsOutputReference <a name="SavingsplansSavingsPlanTimeoutsOutputReference" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.savingsplans_savings_plan.SavingsplansSavingsPlanTimeoutsOutputReference;

new SavingsplansSavingsPlanTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeouts">SavingsplansSavingsPlanTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|SavingsplansSavingsPlanTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.savingsplansSavingsPlan.SavingsplansSavingsPlanTimeouts">SavingsplansSavingsPlanTimeouts</a>

---



