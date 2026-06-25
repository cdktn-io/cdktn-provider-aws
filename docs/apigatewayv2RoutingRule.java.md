# `apigatewayv2RoutingRule` Submodule <a name="`apigatewayv2RoutingRule` Submodule" id="@cdktn/provider-aws.apigatewayv2RoutingRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Apigatewayv2RoutingRule <a name="Apigatewayv2RoutingRule" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/apigatewayv2_routing_rule aws_apigatewayv2_routing_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer"></a>

```java
import io.cdktn.providers.aws.apigatewayv2_routing_rule.Apigatewayv2RoutingRule;

Apigatewayv2RoutingRule.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .domainName(java.lang.String)
    .priority(java.lang.Number)
//  .action(IResolvable|java.util.List<Apigatewayv2RoutingRuleAction>)
//  .condition(IResolvable|java.util.List<Apigatewayv2RoutingRuleCondition>)
//  .region(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.domainName">domainName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/apigatewayv2_routing_rule#domain_name Apigatewayv2RoutingRule#domain_name}. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/apigatewayv2_routing_rule#priority Apigatewayv2RoutingRule#priority}. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.action">action</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleAction">Apigatewayv2RoutingRuleAction</a>></code> | action block. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.condition">condition</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleCondition">Apigatewayv2RoutingRuleCondition</a>></code> | condition block. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.domainName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/apigatewayv2_routing_rule#domain_name Apigatewayv2RoutingRule#domain_name}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.priority"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/apigatewayv2_routing_rule#priority Apigatewayv2RoutingRule#priority}.

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.action"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleAction">Apigatewayv2RoutingRuleAction</a>>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/apigatewayv2_routing_rule#action Apigatewayv2RoutingRule#action}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.condition"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleCondition">Apigatewayv2RoutingRuleCondition</a>>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/apigatewayv2_routing_rule#condition Apigatewayv2RoutingRule#condition}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/apigatewayv2_routing_rule#region Apigatewayv2RoutingRule#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.putAction">putAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAction` <a name="putAction" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.putAction"></a>

```java
public void putAction(IResolvable|java.util.List<Apigatewayv2RoutingRuleAction> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.putAction.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleAction">Apigatewayv2RoutingRuleAction</a>>

---

##### `putCondition` <a name="putCondition" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.putCondition"></a>

```java
public void putCondition(IResolvable|java.util.List<Apigatewayv2RoutingRuleCondition> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.putCondition.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleCondition">Apigatewayv2RoutingRuleCondition</a>>

---

##### `resetAction` <a name="resetAction" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.resetAction"></a>

```java
public void resetAction()
```

##### `resetCondition` <a name="resetCondition" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.resetCondition"></a>

```java
public void resetCondition()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.resetRegion"></a>

```java
public void resetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Apigatewayv2RoutingRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.isConstruct"></a>

```java
import io.cdktn.providers.aws.apigatewayv2_routing_rule.Apigatewayv2RoutingRule;

Apigatewayv2RoutingRule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.apigatewayv2_routing_rule.Apigatewayv2RoutingRule;

Apigatewayv2RoutingRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.apigatewayv2_routing_rule.Apigatewayv2RoutingRule;

Apigatewayv2RoutingRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.apigatewayv2_routing_rule.Apigatewayv2RoutingRule;

Apigatewayv2RoutingRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Apigatewayv2RoutingRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Apigatewayv2RoutingRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Apigatewayv2RoutingRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Apigatewayv2RoutingRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/apigatewayv2_routing_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Apigatewayv2RoutingRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.action">action</a></code> | <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList">Apigatewayv2RoutingRuleActionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList">Apigatewayv2RoutingRuleConditionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.routingRuleArn">routingRuleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.routingRuleId">routingRuleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.actionInput">actionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleAction">Apigatewayv2RoutingRuleAction</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.conditionInput">conditionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleCondition">Apigatewayv2RoutingRuleCondition</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.domainNameInput">domainNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.domainName">domainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.action"></a>

```java
public Apigatewayv2RoutingRuleActionList getAction();
```

- *Type:* <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList">Apigatewayv2RoutingRuleActionList</a>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.condition"></a>

```java
public Apigatewayv2RoutingRuleConditionList getCondition();
```

- *Type:* <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList">Apigatewayv2RoutingRuleConditionList</a>

---

##### `routingRuleArn`<sup>Required</sup> <a name="routingRuleArn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.routingRuleArn"></a>

```java
public java.lang.String getRoutingRuleArn();
```

- *Type:* java.lang.String

---

##### `routingRuleId`<sup>Required</sup> <a name="routingRuleId" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.routingRuleId"></a>

```java
public java.lang.String getRoutingRuleId();
```

- *Type:* java.lang.String

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.actionInput"></a>

```java
public IResolvable|java.util.List<Apigatewayv2RoutingRuleAction> getActionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleAction">Apigatewayv2RoutingRuleAction</a>>

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.conditionInput"></a>

```java
public IResolvable|java.util.List<Apigatewayv2RoutingRuleCondition> getConditionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleCondition">Apigatewayv2RoutingRuleCondition</a>>

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.domainNameInput"></a>

```java
public java.lang.String getDomainNameInput();
```

- *Type:* java.lang.String

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Apigatewayv2RoutingRuleAction <a name="Apigatewayv2RoutingRuleAction" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleAction.Initializer"></a>

```java
import io.cdktn.providers.aws.apigatewayv2_routing_rule.Apigatewayv2RoutingRuleAction;

Apigatewayv2RoutingRuleAction.builder()
//  .invokeApi(IResolvable|java.util.List<Apigatewayv2RoutingRuleActionInvokeApi>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleAction.property.invokeApi">invokeApi</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApi">Apigatewayv2RoutingRuleActionInvokeApi</a>></code> | invoke_api block. |

---

##### `invokeApi`<sup>Optional</sup> <a name="invokeApi" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleAction.property.invokeApi"></a>

```java
public IResolvable|java.util.List<Apigatewayv2RoutingRuleActionInvokeApi> getInvokeApi();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApi">Apigatewayv2RoutingRuleActionInvokeApi</a>>

invoke_api block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/apigatewayv2_routing_rule#invoke_api Apigatewayv2RoutingRule#invoke_api}

---

### Apigatewayv2RoutingRuleActionInvokeApi <a name="Apigatewayv2RoutingRuleActionInvokeApi" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApi"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApi.Initializer"></a>

```java
import io.cdktn.providers.aws.apigatewayv2_routing_rule.Apigatewayv2RoutingRuleActionInvokeApi;

Apigatewayv2RoutingRuleActionInvokeApi.builder()
    .apiId(java.lang.String)
    .stage(java.lang.String)
//  .stripBasePath(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApi.property.apiId">apiId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/apigatewayv2_routing_rule#api_id Apigatewayv2RoutingRule#api_id}. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApi.property.stage">stage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/apigatewayv2_routing_rule#stage Apigatewayv2RoutingRule#stage}. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApi.property.stripBasePath">stripBasePath</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/apigatewayv2_routing_rule#strip_base_path Apigatewayv2RoutingRule#strip_base_path}. |

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApi.property.apiId"></a>

```java
public java.lang.String getApiId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/apigatewayv2_routing_rule#api_id Apigatewayv2RoutingRule#api_id}.

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApi.property.stage"></a>

```java
public java.lang.String getStage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/apigatewayv2_routing_rule#stage Apigatewayv2RoutingRule#stage}.

---

##### `stripBasePath`<sup>Optional</sup> <a name="stripBasePath" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApi.property.stripBasePath"></a>

```java
public java.lang.Boolean|IResolvable getStripBasePath();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/apigatewayv2_routing_rule#strip_base_path Apigatewayv2RoutingRule#strip_base_path}.

---

### Apigatewayv2RoutingRuleCondition <a name="Apigatewayv2RoutingRuleCondition" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleCondition.Initializer"></a>

```java
import io.cdktn.providers.aws.apigatewayv2_routing_rule.Apigatewayv2RoutingRuleCondition;

Apigatewayv2RoutingRuleCondition.builder()
//  .matchBasePaths(IResolvable|java.util.List<Apigatewayv2RoutingRuleConditionMatchBasePaths>)
//  .matchHeaders(IResolvable|java.util.List<Apigatewayv2RoutingRuleConditionMatchHeaders>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleCondition.property.matchBasePaths">matchBasePaths</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePaths">Apigatewayv2RoutingRuleConditionMatchBasePaths</a>></code> | match_base_paths block. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleCondition.property.matchHeaders">matchHeaders</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeaders">Apigatewayv2RoutingRuleConditionMatchHeaders</a>></code> | match_headers block. |

---

##### `matchBasePaths`<sup>Optional</sup> <a name="matchBasePaths" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleCondition.property.matchBasePaths"></a>

```java
public IResolvable|java.util.List<Apigatewayv2RoutingRuleConditionMatchBasePaths> getMatchBasePaths();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePaths">Apigatewayv2RoutingRuleConditionMatchBasePaths</a>>

match_base_paths block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/apigatewayv2_routing_rule#match_base_paths Apigatewayv2RoutingRule#match_base_paths}

---

##### `matchHeaders`<sup>Optional</sup> <a name="matchHeaders" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleCondition.property.matchHeaders"></a>

```java
public IResolvable|java.util.List<Apigatewayv2RoutingRuleConditionMatchHeaders> getMatchHeaders();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeaders">Apigatewayv2RoutingRuleConditionMatchHeaders</a>>

match_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/apigatewayv2_routing_rule#match_headers Apigatewayv2RoutingRule#match_headers}

---

### Apigatewayv2RoutingRuleConditionMatchBasePaths <a name="Apigatewayv2RoutingRuleConditionMatchBasePaths" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePaths"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePaths.Initializer"></a>

```java
import io.cdktn.providers.aws.apigatewayv2_routing_rule.Apigatewayv2RoutingRuleConditionMatchBasePaths;

Apigatewayv2RoutingRuleConditionMatchBasePaths.builder()
    .anyOf(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePaths.property.anyOf">anyOf</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/apigatewayv2_routing_rule#any_of Apigatewayv2RoutingRule#any_of}. |

---

##### `anyOf`<sup>Required</sup> <a name="anyOf" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePaths.property.anyOf"></a>

```java
public java.util.List<java.lang.String> getAnyOf();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/apigatewayv2_routing_rule#any_of Apigatewayv2RoutingRule#any_of}.

---

### Apigatewayv2RoutingRuleConditionMatchHeaders <a name="Apigatewayv2RoutingRuleConditionMatchHeaders" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeaders.Initializer"></a>

```java
import io.cdktn.providers.aws.apigatewayv2_routing_rule.Apigatewayv2RoutingRuleConditionMatchHeaders;

Apigatewayv2RoutingRuleConditionMatchHeaders.builder()
//  .anyOf(IResolvable|java.util.List<Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeaders.property.anyOf">anyOf</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf">Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf</a>></code> | any_of block. |

---

##### `anyOf`<sup>Optional</sup> <a name="anyOf" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeaders.property.anyOf"></a>

```java
public IResolvable|java.util.List<Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf> getAnyOf();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf">Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf</a>>

any_of block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/apigatewayv2_routing_rule#any_of Apigatewayv2RoutingRule#any_of}

---

### Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf <a name="Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf.Initializer"></a>

```java
import io.cdktn.providers.aws.apigatewayv2_routing_rule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf;

Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf.builder()
    .header(java.lang.String)
    .valueGlob(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf.property.header">header</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/apigatewayv2_routing_rule#header Apigatewayv2RoutingRule#header}. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf.property.valueGlob">valueGlob</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/apigatewayv2_routing_rule#value_glob Apigatewayv2RoutingRule#value_glob}. |

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf.property.header"></a>

```java
public java.lang.String getHeader();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/apigatewayv2_routing_rule#header Apigatewayv2RoutingRule#header}.

---

##### `valueGlob`<sup>Required</sup> <a name="valueGlob" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf.property.valueGlob"></a>

```java
public java.lang.String getValueGlob();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/apigatewayv2_routing_rule#value_glob Apigatewayv2RoutingRule#value_glob}.

---

### Apigatewayv2RoutingRuleConfig <a name="Apigatewayv2RoutingRuleConfig" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.apigatewayv2_routing_rule.Apigatewayv2RoutingRuleConfig;

Apigatewayv2RoutingRuleConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .domainName(java.lang.String)
    .priority(java.lang.Number)
//  .action(IResolvable|java.util.List<Apigatewayv2RoutingRuleAction>)
//  .condition(IResolvable|java.util.List<Apigatewayv2RoutingRuleCondition>)
//  .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.domainName">domainName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/apigatewayv2_routing_rule#domain_name Apigatewayv2RoutingRule#domain_name}. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/apigatewayv2_routing_rule#priority Apigatewayv2RoutingRule#priority}. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.action">action</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleAction">Apigatewayv2RoutingRuleAction</a>></code> | action block. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.condition">condition</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleCondition">Apigatewayv2RoutingRuleCondition</a>></code> | condition block. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/apigatewayv2_routing_rule#domain_name Apigatewayv2RoutingRule#domain_name}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/apigatewayv2_routing_rule#priority Apigatewayv2RoutingRule#priority}.

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.action"></a>

```java
public IResolvable|java.util.List<Apigatewayv2RoutingRuleAction> getAction();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleAction">Apigatewayv2RoutingRuleAction</a>>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/apigatewayv2_routing_rule#action Apigatewayv2RoutingRule#action}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.condition"></a>

```java
public IResolvable|java.util.List<Apigatewayv2RoutingRuleCondition> getCondition();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleCondition">Apigatewayv2RoutingRuleCondition</a>>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/apigatewayv2_routing_rule#condition Apigatewayv2RoutingRule#condition}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.52.0/docs/resources/apigatewayv2_routing_rule#region Apigatewayv2RoutingRule#region}

---

## Classes <a name="Classes" id="Classes"></a>

### Apigatewayv2RoutingRuleActionInvokeApiList <a name="Apigatewayv2RoutingRuleActionInvokeApiList" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.Initializer"></a>

```java
import io.cdktn.providers.aws.apigatewayv2_routing_rule.Apigatewayv2RoutingRuleActionInvokeApiList;

new Apigatewayv2RoutingRuleActionInvokeApiList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.get"></a>

```java
public Apigatewayv2RoutingRuleActionInvokeApiOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApi">Apigatewayv2RoutingRuleActionInvokeApi</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Apigatewayv2RoutingRuleActionInvokeApi> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApi">Apigatewayv2RoutingRuleActionInvokeApi</a>>

---


### Apigatewayv2RoutingRuleActionInvokeApiOutputReference <a name="Apigatewayv2RoutingRuleActionInvokeApiOutputReference" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.apigatewayv2_routing_rule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference;

new Apigatewayv2RoutingRuleActionInvokeApiOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.resetStripBasePath">resetStripBasePath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStripBasePath` <a name="resetStripBasePath" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.resetStripBasePath"></a>

```java
public void resetStripBasePath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.property.apiIdInput">apiIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.property.stageInput">stageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.property.stripBasePathInput">stripBasePathInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.property.apiId">apiId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.property.stage">stage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.property.stripBasePath">stripBasePath</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApi">Apigatewayv2RoutingRuleActionInvokeApi</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apiIdInput`<sup>Optional</sup> <a name="apiIdInput" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.property.apiIdInput"></a>

```java
public java.lang.String getApiIdInput();
```

- *Type:* java.lang.String

---

##### `stageInput`<sup>Optional</sup> <a name="stageInput" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.property.stageInput"></a>

```java
public java.lang.String getStageInput();
```

- *Type:* java.lang.String

---

##### `stripBasePathInput`<sup>Optional</sup> <a name="stripBasePathInput" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.property.stripBasePathInput"></a>

```java
public java.lang.Boolean|IResolvable getStripBasePathInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.property.apiId"></a>

```java
public java.lang.String getApiId();
```

- *Type:* java.lang.String

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.property.stage"></a>

```java
public java.lang.String getStage();
```

- *Type:* java.lang.String

---

##### `stripBasePath`<sup>Required</sup> <a name="stripBasePath" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.property.stripBasePath"></a>

```java
public java.lang.Boolean|IResolvable getStripBasePath();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiOutputReference.property.internalValue"></a>

```java
public IResolvable|Apigatewayv2RoutingRuleActionInvokeApi getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApi">Apigatewayv2RoutingRuleActionInvokeApi</a>

---


### Apigatewayv2RoutingRuleActionList <a name="Apigatewayv2RoutingRuleActionList" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.Initializer"></a>

```java
import io.cdktn.providers.aws.apigatewayv2_routing_rule.Apigatewayv2RoutingRuleActionList;

new Apigatewayv2RoutingRuleActionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.get"></a>

```java
public Apigatewayv2RoutingRuleActionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleAction">Apigatewayv2RoutingRuleAction</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Apigatewayv2RoutingRuleAction> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleAction">Apigatewayv2RoutingRuleAction</a>>

---


### Apigatewayv2RoutingRuleActionOutputReference <a name="Apigatewayv2RoutingRuleActionOutputReference" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.apigatewayv2_routing_rule.Apigatewayv2RoutingRuleActionOutputReference;

new Apigatewayv2RoutingRuleActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.putInvokeApi">putInvokeApi</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.resetInvokeApi">resetInvokeApi</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInvokeApi` <a name="putInvokeApi" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.putInvokeApi"></a>

```java
public void putInvokeApi(IResolvable|java.util.List<Apigatewayv2RoutingRuleActionInvokeApi> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.putInvokeApi.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApi">Apigatewayv2RoutingRuleActionInvokeApi</a>>

---

##### `resetInvokeApi` <a name="resetInvokeApi" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.resetInvokeApi"></a>

```java
public void resetInvokeApi()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.property.invokeApi">invokeApi</a></code> | <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList">Apigatewayv2RoutingRuleActionInvokeApiList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.property.invokeApiInput">invokeApiInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApi">Apigatewayv2RoutingRuleActionInvokeApi</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleAction">Apigatewayv2RoutingRuleAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `invokeApi`<sup>Required</sup> <a name="invokeApi" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.property.invokeApi"></a>

```java
public Apigatewayv2RoutingRuleActionInvokeApiList getInvokeApi();
```

- *Type:* <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApiList">Apigatewayv2RoutingRuleActionInvokeApiList</a>

---

##### `invokeApiInput`<sup>Optional</sup> <a name="invokeApiInput" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.property.invokeApiInput"></a>

```java
public IResolvable|java.util.List<Apigatewayv2RoutingRuleActionInvokeApi> getInvokeApiInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionInvokeApi">Apigatewayv2RoutingRuleActionInvokeApi</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleActionOutputReference.property.internalValue"></a>

```java
public IResolvable|Apigatewayv2RoutingRuleAction getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleAction">Apigatewayv2RoutingRuleAction</a>

---


### Apigatewayv2RoutingRuleConditionList <a name="Apigatewayv2RoutingRuleConditionList" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.Initializer"></a>

```java
import io.cdktn.providers.aws.apigatewayv2_routing_rule.Apigatewayv2RoutingRuleConditionList;

new Apigatewayv2RoutingRuleConditionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.get"></a>

```java
public Apigatewayv2RoutingRuleConditionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleCondition">Apigatewayv2RoutingRuleCondition</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Apigatewayv2RoutingRuleCondition> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleCondition">Apigatewayv2RoutingRuleCondition</a>>

---


### Apigatewayv2RoutingRuleConditionMatchBasePathsList <a name="Apigatewayv2RoutingRuleConditionMatchBasePathsList" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.Initializer"></a>

```java
import io.cdktn.providers.aws.apigatewayv2_routing_rule.Apigatewayv2RoutingRuleConditionMatchBasePathsList;

new Apigatewayv2RoutingRuleConditionMatchBasePathsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.get"></a>

```java
public Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePaths">Apigatewayv2RoutingRuleConditionMatchBasePaths</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Apigatewayv2RoutingRuleConditionMatchBasePaths> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePaths">Apigatewayv2RoutingRuleConditionMatchBasePaths</a>>

---


### Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference <a name="Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.apigatewayv2_routing_rule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference;

new Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.property.anyOfInput">anyOfInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.property.anyOf">anyOf</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePaths">Apigatewayv2RoutingRuleConditionMatchBasePaths</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `anyOfInput`<sup>Optional</sup> <a name="anyOfInput" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.property.anyOfInput"></a>

```java
public java.util.List<java.lang.String> getAnyOfInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `anyOf`<sup>Required</sup> <a name="anyOf" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.property.anyOf"></a>

```java
public java.util.List<java.lang.String> getAnyOf();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsOutputReference.property.internalValue"></a>

```java
public IResolvable|Apigatewayv2RoutingRuleConditionMatchBasePaths getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePaths">Apigatewayv2RoutingRuleConditionMatchBasePaths</a>

---


### Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList <a name="Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.Initializer"></a>

```java
import io.cdktn.providers.aws.apigatewayv2_routing_rule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList;

new Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.get"></a>

```java
public Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf">Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf">Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf</a>>

---


### Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference <a name="Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.apigatewayv2_routing_rule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference;

new Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.property.headerInput">headerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.property.valueGlobInput">valueGlobInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.property.header">header</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.property.valueGlob">valueGlob</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf">Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `headerInput`<sup>Optional</sup> <a name="headerInput" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.property.headerInput"></a>

```java
public java.lang.String getHeaderInput();
```

- *Type:* java.lang.String

---

##### `valueGlobInput`<sup>Optional</sup> <a name="valueGlobInput" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.property.valueGlobInput"></a>

```java
public java.lang.String getValueGlobInput();
```

- *Type:* java.lang.String

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.property.header"></a>

```java
public java.lang.String getHeader();
```

- *Type:* java.lang.String

---

##### `valueGlob`<sup>Required</sup> <a name="valueGlob" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.property.valueGlob"></a>

```java
public java.lang.String getValueGlob();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfOutputReference.property.internalValue"></a>

```java
public IResolvable|Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf">Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf</a>

---


### Apigatewayv2RoutingRuleConditionMatchHeadersList <a name="Apigatewayv2RoutingRuleConditionMatchHeadersList" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.Initializer"></a>

```java
import io.cdktn.providers.aws.apigatewayv2_routing_rule.Apigatewayv2RoutingRuleConditionMatchHeadersList;

new Apigatewayv2RoutingRuleConditionMatchHeadersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.get"></a>

```java
public Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeaders">Apigatewayv2RoutingRuleConditionMatchHeaders</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Apigatewayv2RoutingRuleConditionMatchHeaders> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeaders">Apigatewayv2RoutingRuleConditionMatchHeaders</a>>

---


### Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference <a name="Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.apigatewayv2_routing_rule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference;

new Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.putAnyOf">putAnyOf</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.resetAnyOf">resetAnyOf</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAnyOf` <a name="putAnyOf" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.putAnyOf"></a>

```java
public void putAnyOf(IResolvable|java.util.List<Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.putAnyOf.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf">Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf</a>>

---

##### `resetAnyOf` <a name="resetAnyOf" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.resetAnyOf"></a>

```java
public void resetAnyOf()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.property.anyOf">anyOf</a></code> | <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList">Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.property.anyOfInput">anyOfInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf">Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeaders">Apigatewayv2RoutingRuleConditionMatchHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `anyOf`<sup>Required</sup> <a name="anyOf" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.property.anyOf"></a>

```java
public Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList getAnyOf();
```

- *Type:* <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList">Apigatewayv2RoutingRuleConditionMatchHeadersAnyOfList</a>

---

##### `anyOfInput`<sup>Optional</sup> <a name="anyOfInput" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.property.anyOfInput"></a>

```java
public IResolvable|java.util.List<Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf> getAnyOfInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf">Apigatewayv2RoutingRuleConditionMatchHeadersAnyOf</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersOutputReference.property.internalValue"></a>

```java
public IResolvable|Apigatewayv2RoutingRuleConditionMatchHeaders getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeaders">Apigatewayv2RoutingRuleConditionMatchHeaders</a>

---


### Apigatewayv2RoutingRuleConditionOutputReference <a name="Apigatewayv2RoutingRuleConditionOutputReference" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.apigatewayv2_routing_rule.Apigatewayv2RoutingRuleConditionOutputReference;

new Apigatewayv2RoutingRuleConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.putMatchBasePaths">putMatchBasePaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.putMatchHeaders">putMatchHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.resetMatchBasePaths">resetMatchBasePaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.resetMatchHeaders">resetMatchHeaders</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMatchBasePaths` <a name="putMatchBasePaths" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.putMatchBasePaths"></a>

```java
public void putMatchBasePaths(IResolvable|java.util.List<Apigatewayv2RoutingRuleConditionMatchBasePaths> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.putMatchBasePaths.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePaths">Apigatewayv2RoutingRuleConditionMatchBasePaths</a>>

---

##### `putMatchHeaders` <a name="putMatchHeaders" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.putMatchHeaders"></a>

```java
public void putMatchHeaders(IResolvable|java.util.List<Apigatewayv2RoutingRuleConditionMatchHeaders> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.putMatchHeaders.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeaders">Apigatewayv2RoutingRuleConditionMatchHeaders</a>>

---

##### `resetMatchBasePaths` <a name="resetMatchBasePaths" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.resetMatchBasePaths"></a>

```java
public void resetMatchBasePaths()
```

##### `resetMatchHeaders` <a name="resetMatchHeaders" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.resetMatchHeaders"></a>

```java
public void resetMatchHeaders()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.property.matchBasePaths">matchBasePaths</a></code> | <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList">Apigatewayv2RoutingRuleConditionMatchBasePathsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.property.matchHeaders">matchHeaders</a></code> | <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList">Apigatewayv2RoutingRuleConditionMatchHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.property.matchBasePathsInput">matchBasePathsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePaths">Apigatewayv2RoutingRuleConditionMatchBasePaths</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.property.matchHeadersInput">matchHeadersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeaders">Apigatewayv2RoutingRuleConditionMatchHeaders</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleCondition">Apigatewayv2RoutingRuleCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `matchBasePaths`<sup>Required</sup> <a name="matchBasePaths" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.property.matchBasePaths"></a>

```java
public Apigatewayv2RoutingRuleConditionMatchBasePathsList getMatchBasePaths();
```

- *Type:* <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePathsList">Apigatewayv2RoutingRuleConditionMatchBasePathsList</a>

---

##### `matchHeaders`<sup>Required</sup> <a name="matchHeaders" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.property.matchHeaders"></a>

```java
public Apigatewayv2RoutingRuleConditionMatchHeadersList getMatchHeaders();
```

- *Type:* <a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeadersList">Apigatewayv2RoutingRuleConditionMatchHeadersList</a>

---

##### `matchBasePathsInput`<sup>Optional</sup> <a name="matchBasePathsInput" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.property.matchBasePathsInput"></a>

```java
public IResolvable|java.util.List<Apigatewayv2RoutingRuleConditionMatchBasePaths> getMatchBasePathsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchBasePaths">Apigatewayv2RoutingRuleConditionMatchBasePaths</a>>

---

##### `matchHeadersInput`<sup>Optional</sup> <a name="matchHeadersInput" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.property.matchHeadersInput"></a>

```java
public IResolvable|java.util.List<Apigatewayv2RoutingRuleConditionMatchHeaders> getMatchHeadersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionMatchHeaders">Apigatewayv2RoutingRuleConditionMatchHeaders</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleConditionOutputReference.property.internalValue"></a>

```java
public IResolvable|Apigatewayv2RoutingRuleCondition getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.apigatewayv2RoutingRule.Apigatewayv2RoutingRuleCondition">Apigatewayv2RoutingRuleCondition</a>

---



