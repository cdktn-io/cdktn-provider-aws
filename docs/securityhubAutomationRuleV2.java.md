# `securityhubAutomationRuleV2` Submodule <a name="`securityhubAutomationRuleV2` Submodule" id="@cdktn/provider-aws.securityhubAutomationRuleV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityhubAutomationRuleV2 <a name="SecurityhubAutomationRuleV2" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/securityhub_automation_rule_v2 aws_securityhub_automation_rule_v2}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer"></a>

```java
import io.cdktn.providers.aws.securityhub_automation_rule_v2.SecurityhubAutomationRuleV2;

SecurityhubAutomationRuleV2.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .description(java.lang.String)
    .ruleName(java.lang.String)
    .ruleOrder(java.lang.Number)
//  .action(IResolvable|java.util.List<SecurityhubAutomationRuleV2Action>)
//  .criteria(IResolvable|java.util.List<SecurityhubAutomationRuleV2Criteria>)
//  .region(java.lang.String)
//  .ruleStatus(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A description of the automation rule. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.ruleName">ruleName</a></code> | <code>java.lang.String</code> | The name of the automation rule. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.ruleOrder">ruleOrder</a></code> | <code>java.lang.Number</code> | The priority of the rule (lower values = higher priority). |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.action">action</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Action">SecurityhubAutomationRuleV2Action</a>></code> | action block. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.criteria">criteria</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria">SecurityhubAutomationRuleV2Criteria</a>></code> | criteria block. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.ruleStatus">ruleStatus</a></code> | <code>java.lang.String</code> | The status of the rule: ENABLED or DISABLED. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/securityhub_automation_rule_v2#tags SecurityhubAutomationRuleV2#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A description of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/securityhub_automation_rule_v2#description SecurityhubAutomationRuleV2#description}

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.ruleName"></a>

- *Type:* java.lang.String

The name of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/securityhub_automation_rule_v2#rule_name SecurityhubAutomationRuleV2#rule_name}

---

##### `ruleOrder`<sup>Required</sup> <a name="ruleOrder" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.ruleOrder"></a>

- *Type:* java.lang.Number

The priority of the rule (lower values = higher priority).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/securityhub_automation_rule_v2#rule_order SecurityhubAutomationRuleV2#rule_order}

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.action"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Action">SecurityhubAutomationRuleV2Action</a>>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/securityhub_automation_rule_v2#action SecurityhubAutomationRuleV2#action}

---

##### `criteria`<sup>Optional</sup> <a name="criteria" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.criteria"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria">SecurityhubAutomationRuleV2Criteria</a>>

criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/securityhub_automation_rule_v2#criteria SecurityhubAutomationRuleV2#criteria}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/securityhub_automation_rule_v2#region SecurityhubAutomationRuleV2#region}

---

##### `ruleStatus`<sup>Optional</sup> <a name="ruleStatus" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.ruleStatus"></a>

- *Type:* java.lang.String

The status of the rule: ENABLED or DISABLED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/securityhub_automation_rule_v2#rule_status SecurityhubAutomationRuleV2#rule_status}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/securityhub_automation_rule_v2#tags SecurityhubAutomationRuleV2#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.putAction">putAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.putCriteria">putCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.resetCriteria">resetCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.resetRuleStatus">resetRuleStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAction` <a name="putAction" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.putAction"></a>

```java
public void putAction(IResolvable|java.util.List<SecurityhubAutomationRuleV2Action> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.putAction.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Action">SecurityhubAutomationRuleV2Action</a>>

---

##### `putCriteria` <a name="putCriteria" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.putCriteria"></a>

```java
public void putCriteria(IResolvable|java.util.List<SecurityhubAutomationRuleV2Criteria> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.putCriteria.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria">SecurityhubAutomationRuleV2Criteria</a>>

---

##### `resetAction` <a name="resetAction" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.resetAction"></a>

```java
public void resetAction()
```

##### `resetCriteria` <a name="resetCriteria" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.resetCriteria"></a>

```java
public void resetCriteria()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetRuleStatus` <a name="resetRuleStatus" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.resetRuleStatus"></a>

```java
public void resetRuleStatus()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SecurityhubAutomationRuleV2 resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.isConstruct"></a>

```java
import io.cdktn.providers.aws.securityhub_automation_rule_v2.SecurityhubAutomationRuleV2;

SecurityhubAutomationRuleV2.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.securityhub_automation_rule_v2.SecurityhubAutomationRuleV2;

SecurityhubAutomationRuleV2.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.securityhub_automation_rule_v2.SecurityhubAutomationRuleV2;

SecurityhubAutomationRuleV2.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.securityhub_automation_rule_v2.SecurityhubAutomationRuleV2;

SecurityhubAutomationRuleV2.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SecurityhubAutomationRuleV2.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SecurityhubAutomationRuleV2 resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SecurityhubAutomationRuleV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SecurityhubAutomationRuleV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/securityhub_automation_rule_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SecurityhubAutomationRuleV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.action">action</a></code> | <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList">SecurityhubAutomationRuleV2ActionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.criteria">criteria</a></code> | <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList">SecurityhubAutomationRuleV2CriteriaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleId">ruleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.tagsAll">tagsAll</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.actionInput">actionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Action">SecurityhubAutomationRuleV2Action</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.criteriaInput">criteriaInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria">SecurityhubAutomationRuleV2Criteria</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleNameInput">ruleNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleOrderInput">ruleOrderInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleStatusInput">ruleStatusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleName">ruleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleOrder">ruleOrder</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleStatus">ruleStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.action"></a>

```java
public SecurityhubAutomationRuleV2ActionList getAction();
```

- *Type:* <a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList">SecurityhubAutomationRuleV2ActionList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.criteria"></a>

```java
public SecurityhubAutomationRuleV2CriteriaList getCriteria();
```

- *Type:* <a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList">SecurityhubAutomationRuleV2CriteriaList</a>

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleId"></a>

```java
public java.lang.String getRuleId();
```

- *Type:* java.lang.String

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.tagsAll"></a>

```java
public StringMap getTagsAll();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.actionInput"></a>

```java
public IResolvable|java.util.List<SecurityhubAutomationRuleV2Action> getActionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Action">SecurityhubAutomationRuleV2Action</a>>

---

##### `criteriaInput`<sup>Optional</sup> <a name="criteriaInput" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.criteriaInput"></a>

```java
public IResolvable|java.util.List<SecurityhubAutomationRuleV2Criteria> getCriteriaInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria">SecurityhubAutomationRuleV2Criteria</a>>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `ruleNameInput`<sup>Optional</sup> <a name="ruleNameInput" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleNameInput"></a>

```java
public java.lang.String getRuleNameInput();
```

- *Type:* java.lang.String

---

##### `ruleOrderInput`<sup>Optional</sup> <a name="ruleOrderInput" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleOrderInput"></a>

```java
public java.lang.Number getRuleOrderInput();
```

- *Type:* java.lang.Number

---

##### `ruleStatusInput`<sup>Optional</sup> <a name="ruleStatusInput" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleStatusInput"></a>

```java
public java.lang.String getRuleStatusInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleName"></a>

```java
public java.lang.String getRuleName();
```

- *Type:* java.lang.String

---

##### `ruleOrder`<sup>Required</sup> <a name="ruleOrder" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleOrder"></a>

```java
public java.lang.Number getRuleOrder();
```

- *Type:* java.lang.Number

---

##### `ruleStatus`<sup>Required</sup> <a name="ruleStatus" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleStatus"></a>

```java
public java.lang.String getRuleStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityhubAutomationRuleV2Action <a name="SecurityhubAutomationRuleV2Action" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Action"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Action.Initializer"></a>

```java
import io.cdktn.providers.aws.securityhub_automation_rule_v2.SecurityhubAutomationRuleV2Action;

SecurityhubAutomationRuleV2Action.builder()
    .type(java.lang.String)
//  .externalIntegrationConfiguration(IResolvable|java.util.List<SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration>)
//  .findingFieldsUpdate(IResolvable|java.util.List<SecurityhubAutomationRuleV2ActionFindingFieldsUpdate>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Action.property.type">type</a></code> | <code>java.lang.String</code> | The action type: FINDING_FIELDS_UPDATE or EXTERNAL_INTEGRATION. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Action.property.externalIntegrationConfiguration">externalIntegrationConfiguration</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration">SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration</a>></code> | external_integration_configuration block. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Action.property.findingFieldsUpdate">findingFieldsUpdate</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdate">SecurityhubAutomationRuleV2ActionFindingFieldsUpdate</a>></code> | finding_fields_update block. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Action.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The action type: FINDING_FIELDS_UPDATE or EXTERNAL_INTEGRATION.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/securityhub_automation_rule_v2#type SecurityhubAutomationRuleV2#type}

---

##### `externalIntegrationConfiguration`<sup>Optional</sup> <a name="externalIntegrationConfiguration" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Action.property.externalIntegrationConfiguration"></a>

```java
public IResolvable|java.util.List<SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration> getExternalIntegrationConfiguration();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration">SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration</a>>

external_integration_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/securityhub_automation_rule_v2#external_integration_configuration SecurityhubAutomationRuleV2#external_integration_configuration}

---

##### `findingFieldsUpdate`<sup>Optional</sup> <a name="findingFieldsUpdate" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Action.property.findingFieldsUpdate"></a>

```java
public IResolvable|java.util.List<SecurityhubAutomationRuleV2ActionFindingFieldsUpdate> getFindingFieldsUpdate();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdate">SecurityhubAutomationRuleV2ActionFindingFieldsUpdate</a>>

finding_fields_update block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/securityhub_automation_rule_v2#finding_fields_update SecurityhubAutomationRuleV2#finding_fields_update}

---

### SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration <a name="SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration.Initializer"></a>

```java
import io.cdktn.providers.aws.securityhub_automation_rule_v2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration;

SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration.builder()
    .connectorArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration.property.connectorArn">connectorArn</a></code> | <code>java.lang.String</code> | The ARN of the connector. |

---

##### `connectorArn`<sup>Required</sup> <a name="connectorArn" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration.property.connectorArn"></a>

```java
public java.lang.String getConnectorArn();
```

- *Type:* java.lang.String

The ARN of the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/securityhub_automation_rule_v2#connector_arn SecurityhubAutomationRuleV2#connector_arn}

---

### SecurityhubAutomationRuleV2ActionFindingFieldsUpdate <a name="SecurityhubAutomationRuleV2ActionFindingFieldsUpdate" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdate.Initializer"></a>

```java
import io.cdktn.providers.aws.securityhub_automation_rule_v2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdate;

SecurityhubAutomationRuleV2ActionFindingFieldsUpdate.builder()
//  .comment(java.lang.String)
//  .severityId(java.lang.Number)
//  .statusId(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdate.property.comment">comment</a></code> | <code>java.lang.String</code> | A comment for the finding. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdate.property.severityId">severityId</a></code> | <code>java.lang.Number</code> | The severity ID to assign. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdate.property.statusId">statusId</a></code> | <code>java.lang.Number</code> | The status ID to assign. |

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdate.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

A comment for the finding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/securityhub_automation_rule_v2#comment SecurityhubAutomationRuleV2#comment}

---

##### `severityId`<sup>Optional</sup> <a name="severityId" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdate.property.severityId"></a>

```java
public java.lang.Number getSeverityId();
```

- *Type:* java.lang.Number

The severity ID to assign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/securityhub_automation_rule_v2#severity_id SecurityhubAutomationRuleV2#severity_id}

---

##### `statusId`<sup>Optional</sup> <a name="statusId" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdate.property.statusId"></a>

```java
public java.lang.Number getStatusId();
```

- *Type:* java.lang.Number

The status ID to assign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/securityhub_automation_rule_v2#status_id SecurityhubAutomationRuleV2#status_id}

---

### SecurityhubAutomationRuleV2Config <a name="SecurityhubAutomationRuleV2Config" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.Initializer"></a>

```java
import io.cdktn.providers.aws.securityhub_automation_rule_v2.SecurityhubAutomationRuleV2Config;

SecurityhubAutomationRuleV2Config.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .description(java.lang.String)
    .ruleName(java.lang.String)
    .ruleOrder(java.lang.Number)
//  .action(IResolvable|java.util.List<SecurityhubAutomationRuleV2Action>)
//  .criteria(IResolvable|java.util.List<SecurityhubAutomationRuleV2Criteria>)
//  .region(java.lang.String)
//  .ruleStatus(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.description">description</a></code> | <code>java.lang.String</code> | A description of the automation rule. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.ruleName">ruleName</a></code> | <code>java.lang.String</code> | The name of the automation rule. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.ruleOrder">ruleOrder</a></code> | <code>java.lang.Number</code> | The priority of the rule (lower values = higher priority). |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.action">action</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Action">SecurityhubAutomationRuleV2Action</a>></code> | action block. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.criteria">criteria</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria">SecurityhubAutomationRuleV2Criteria</a>></code> | criteria block. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.ruleStatus">ruleStatus</a></code> | <code>java.lang.String</code> | The status of the rule: ENABLED or DISABLED. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/securityhub_automation_rule_v2#tags SecurityhubAutomationRuleV2#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/securityhub_automation_rule_v2#description SecurityhubAutomationRuleV2#description}

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.ruleName"></a>

```java
public java.lang.String getRuleName();
```

- *Type:* java.lang.String

The name of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/securityhub_automation_rule_v2#rule_name SecurityhubAutomationRuleV2#rule_name}

---

##### `ruleOrder`<sup>Required</sup> <a name="ruleOrder" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.ruleOrder"></a>

```java
public java.lang.Number getRuleOrder();
```

- *Type:* java.lang.Number

The priority of the rule (lower values = higher priority).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/securityhub_automation_rule_v2#rule_order SecurityhubAutomationRuleV2#rule_order}

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.action"></a>

```java
public IResolvable|java.util.List<SecurityhubAutomationRuleV2Action> getAction();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Action">SecurityhubAutomationRuleV2Action</a>>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/securityhub_automation_rule_v2#action SecurityhubAutomationRuleV2#action}

---

##### `criteria`<sup>Optional</sup> <a name="criteria" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.criteria"></a>

```java
public IResolvable|java.util.List<SecurityhubAutomationRuleV2Criteria> getCriteria();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria">SecurityhubAutomationRuleV2Criteria</a>>

criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/securityhub_automation_rule_v2#criteria SecurityhubAutomationRuleV2#criteria}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/securityhub_automation_rule_v2#region SecurityhubAutomationRuleV2#region}

---

##### `ruleStatus`<sup>Optional</sup> <a name="ruleStatus" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.ruleStatus"></a>

```java
public java.lang.String getRuleStatus();
```

- *Type:* java.lang.String

The status of the rule: ENABLED or DISABLED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/securityhub_automation_rule_v2#rule_status SecurityhubAutomationRuleV2#rule_status}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/securityhub_automation_rule_v2#tags SecurityhubAutomationRuleV2#tags}.

---

### SecurityhubAutomationRuleV2Criteria <a name="SecurityhubAutomationRuleV2Criteria" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria.Initializer"></a>

```java
import io.cdktn.providers.aws.securityhub_automation_rule_v2.SecurityhubAutomationRuleV2Criteria;

SecurityhubAutomationRuleV2Criteria.builder()
    .ocsfFindingCriteriaJson(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria.property.ocsfFindingCriteriaJson">ocsfFindingCriteriaJson</a></code> | <code>java.lang.String</code> | JSON-encoded OCSF finding criteria for the rule. |

---

##### `ocsfFindingCriteriaJson`<sup>Required</sup> <a name="ocsfFindingCriteriaJson" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria.property.ocsfFindingCriteriaJson"></a>

```java
public java.lang.String getOcsfFindingCriteriaJson();
```

- *Type:* java.lang.String

JSON-encoded OCSF finding criteria for the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/securityhub_automation_rule_v2#ocsf_finding_criteria_json SecurityhubAutomationRuleV2#ocsf_finding_criteria_json}

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList <a name="SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.Initializer"></a>

```java
import io.cdktn.providers.aws.securityhub_automation_rule_v2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList;

new SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.get"></a>

```java
public SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration">SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration">SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration</a>>

---


### SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference <a name="SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.securityhub_automation_rule_v2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference;

new SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.property.connectorArnInput">connectorArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.property.connectorArn">connectorArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration">SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectorArnInput`<sup>Optional</sup> <a name="connectorArnInput" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.property.connectorArnInput"></a>

```java
public java.lang.String getConnectorArnInput();
```

- *Type:* java.lang.String

---

##### `connectorArn`<sup>Required</sup> <a name="connectorArn" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.property.connectorArn"></a>

```java
public java.lang.String getConnectorArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration">SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration</a>

---


### SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList <a name="SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.Initializer"></a>

```java
import io.cdktn.providers.aws.securityhub_automation_rule_v2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList;

new SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.get"></a>

```java
public SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdate">SecurityhubAutomationRuleV2ActionFindingFieldsUpdate</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SecurityhubAutomationRuleV2ActionFindingFieldsUpdate> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdate">SecurityhubAutomationRuleV2ActionFindingFieldsUpdate</a>>

---


### SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference <a name="SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.securityhub_automation_rule_v2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference;

new SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.resetSeverityId">resetSeverityId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.resetStatusId">resetStatusId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComment` <a name="resetComment" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.resetComment"></a>

```java
public void resetComment()
```

##### `resetSeverityId` <a name="resetSeverityId" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.resetSeverityId"></a>

```java
public void resetSeverityId()
```

##### `resetStatusId` <a name="resetStatusId" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.resetStatusId"></a>

```java
public void resetStatusId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.property.severityIdInput">severityIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.property.statusIdInput">statusIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.property.severityId">severityId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.property.statusId">statusId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdate">SecurityhubAutomationRuleV2ActionFindingFieldsUpdate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `severityIdInput`<sup>Optional</sup> <a name="severityIdInput" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.property.severityIdInput"></a>

```java
public java.lang.Number getSeverityIdInput();
```

- *Type:* java.lang.Number

---

##### `statusIdInput`<sup>Optional</sup> <a name="statusIdInput" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.property.statusIdInput"></a>

```java
public java.lang.Number getStatusIdInput();
```

- *Type:* java.lang.Number

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `severityId`<sup>Required</sup> <a name="severityId" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.property.severityId"></a>

```java
public java.lang.Number getSeverityId();
```

- *Type:* java.lang.Number

---

##### `statusId`<sup>Required</sup> <a name="statusId" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.property.statusId"></a>

```java
public java.lang.Number getStatusId();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateOutputReference.property.internalValue"></a>

```java
public IResolvable|SecurityhubAutomationRuleV2ActionFindingFieldsUpdate getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdate">SecurityhubAutomationRuleV2ActionFindingFieldsUpdate</a>

---


### SecurityhubAutomationRuleV2ActionList <a name="SecurityhubAutomationRuleV2ActionList" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.Initializer"></a>

```java
import io.cdktn.providers.aws.securityhub_automation_rule_v2.SecurityhubAutomationRuleV2ActionList;

new SecurityhubAutomationRuleV2ActionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.get"></a>

```java
public SecurityhubAutomationRuleV2ActionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Action">SecurityhubAutomationRuleV2Action</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SecurityhubAutomationRuleV2Action> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Action">SecurityhubAutomationRuleV2Action</a>>

---


### SecurityhubAutomationRuleV2ActionOutputReference <a name="SecurityhubAutomationRuleV2ActionOutputReference" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.securityhub_automation_rule_v2.SecurityhubAutomationRuleV2ActionOutputReference;

new SecurityhubAutomationRuleV2ActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.putExternalIntegrationConfiguration">putExternalIntegrationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.putFindingFieldsUpdate">putFindingFieldsUpdate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.resetExternalIntegrationConfiguration">resetExternalIntegrationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.resetFindingFieldsUpdate">resetFindingFieldsUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExternalIntegrationConfiguration` <a name="putExternalIntegrationConfiguration" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.putExternalIntegrationConfiguration"></a>

```java
public void putExternalIntegrationConfiguration(IResolvable|java.util.List<SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.putExternalIntegrationConfiguration.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration">SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration</a>>

---

##### `putFindingFieldsUpdate` <a name="putFindingFieldsUpdate" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.putFindingFieldsUpdate"></a>

```java
public void putFindingFieldsUpdate(IResolvable|java.util.List<SecurityhubAutomationRuleV2ActionFindingFieldsUpdate> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.putFindingFieldsUpdate.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdate">SecurityhubAutomationRuleV2ActionFindingFieldsUpdate</a>>

---

##### `resetExternalIntegrationConfiguration` <a name="resetExternalIntegrationConfiguration" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.resetExternalIntegrationConfiguration"></a>

```java
public void resetExternalIntegrationConfiguration()
```

##### `resetFindingFieldsUpdate` <a name="resetFindingFieldsUpdate" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.resetFindingFieldsUpdate"></a>

```java
public void resetFindingFieldsUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.property.externalIntegrationConfiguration">externalIntegrationConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList">SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.property.findingFieldsUpdate">findingFieldsUpdate</a></code> | <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList">SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.property.externalIntegrationConfigurationInput">externalIntegrationConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration">SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.property.findingFieldsUpdateInput">findingFieldsUpdateInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdate">SecurityhubAutomationRuleV2ActionFindingFieldsUpdate</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Action">SecurityhubAutomationRuleV2Action</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `externalIntegrationConfiguration`<sup>Required</sup> <a name="externalIntegrationConfiguration" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.property.externalIntegrationConfiguration"></a>

```java
public SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList getExternalIntegrationConfiguration();
```

- *Type:* <a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList">SecurityhubAutomationRuleV2ActionExternalIntegrationConfigurationList</a>

---

##### `findingFieldsUpdate`<sup>Required</sup> <a name="findingFieldsUpdate" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.property.findingFieldsUpdate"></a>

```java
public SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList getFindingFieldsUpdate();
```

- *Type:* <a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList">SecurityhubAutomationRuleV2ActionFindingFieldsUpdateList</a>

---

##### `externalIntegrationConfigurationInput`<sup>Optional</sup> <a name="externalIntegrationConfigurationInput" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.property.externalIntegrationConfigurationInput"></a>

```java
public IResolvable|java.util.List<SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration> getExternalIntegrationConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration">SecurityhubAutomationRuleV2ActionExternalIntegrationConfiguration</a>>

---

##### `findingFieldsUpdateInput`<sup>Optional</sup> <a name="findingFieldsUpdateInput" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.property.findingFieldsUpdateInput"></a>

```java
public IResolvable|java.util.List<SecurityhubAutomationRuleV2ActionFindingFieldsUpdate> getFindingFieldsUpdateInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionFindingFieldsUpdate">SecurityhubAutomationRuleV2ActionFindingFieldsUpdate</a>>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionOutputReference.property.internalValue"></a>

```java
public IResolvable|SecurityhubAutomationRuleV2Action getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Action">SecurityhubAutomationRuleV2Action</a>

---


### SecurityhubAutomationRuleV2CriteriaList <a name="SecurityhubAutomationRuleV2CriteriaList" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.Initializer"></a>

```java
import io.cdktn.providers.aws.securityhub_automation_rule_v2.SecurityhubAutomationRuleV2CriteriaList;

new SecurityhubAutomationRuleV2CriteriaList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.get"></a>

```java
public SecurityhubAutomationRuleV2CriteriaOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria">SecurityhubAutomationRuleV2Criteria</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SecurityhubAutomationRuleV2Criteria> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria">SecurityhubAutomationRuleV2Criteria</a>>

---


### SecurityhubAutomationRuleV2CriteriaOutputReference <a name="SecurityhubAutomationRuleV2CriteriaOutputReference" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.securityhub_automation_rule_v2.SecurityhubAutomationRuleV2CriteriaOutputReference;

new SecurityhubAutomationRuleV2CriteriaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.property.ocsfFindingCriteriaJsonInput">ocsfFindingCriteriaJsonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.property.ocsfFindingCriteriaJson">ocsfFindingCriteriaJson</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria">SecurityhubAutomationRuleV2Criteria</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ocsfFindingCriteriaJsonInput`<sup>Optional</sup> <a name="ocsfFindingCriteriaJsonInput" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.property.ocsfFindingCriteriaJsonInput"></a>

```java
public java.lang.String getOcsfFindingCriteriaJsonInput();
```

- *Type:* java.lang.String

---

##### `ocsfFindingCriteriaJson`<sup>Required</sup> <a name="ocsfFindingCriteriaJson" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.property.ocsfFindingCriteriaJson"></a>

```java
public java.lang.String getOcsfFindingCriteriaJson();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.property.internalValue"></a>

```java
public IResolvable|SecurityhubAutomationRuleV2Criteria getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria">SecurityhubAutomationRuleV2Criteria</a>

---



