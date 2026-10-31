# `bedrockEnforcedGuardrailConfiguration` Submodule <a name="`bedrockEnforcedGuardrailConfiguration` Submodule" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockEnforcedGuardrailConfiguration <a name="BedrockEnforcedGuardrailConfiguration" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/bedrock_enforced_guardrail_configuration aws_bedrock_enforced_guardrail_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrock_enforced_guardrail_configuration.BedrockEnforcedGuardrailConfiguration;

BedrockEnforcedGuardrailConfiguration.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .guardrailArn(java.lang.String)
    .guardrailVersion(java.lang.String)
//  .modelEnforcement(IResolvable|java.util.List<BedrockEnforcedGuardrailConfigurationModelEnforcement>)
//  .region(java.lang.String)
//  .selectiveContentGuarding(IResolvable|java.util.List<BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.guardrailArn">guardrailArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/bedrock_enforced_guardrail_configuration#guardrail_arn BedrockEnforcedGuardrailConfiguration#guardrail_arn}. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.guardrailVersion">guardrailVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/bedrock_enforced_guardrail_configuration#guardrail_version BedrockEnforcedGuardrailConfiguration#guardrail_version}. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.modelEnforcement">modelEnforcement</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcement">BedrockEnforcedGuardrailConfigurationModelEnforcement</a>></code> | model_enforcement block. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.selectiveContentGuarding">selectiveContentGuarding</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding">BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding</a>></code> | selective_content_guarding block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `guardrailArn`<sup>Required</sup> <a name="guardrailArn" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.guardrailArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/bedrock_enforced_guardrail_configuration#guardrail_arn BedrockEnforcedGuardrailConfiguration#guardrail_arn}.

---

##### `guardrailVersion`<sup>Required</sup> <a name="guardrailVersion" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.guardrailVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/bedrock_enforced_guardrail_configuration#guardrail_version BedrockEnforcedGuardrailConfiguration#guardrail_version}.

---

##### `modelEnforcement`<sup>Optional</sup> <a name="modelEnforcement" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.modelEnforcement"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcement">BedrockEnforcedGuardrailConfigurationModelEnforcement</a>>

model_enforcement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/bedrock_enforced_guardrail_configuration#model_enforcement BedrockEnforcedGuardrailConfiguration#model_enforcement}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/bedrock_enforced_guardrail_configuration#region BedrockEnforcedGuardrailConfiguration#region}

---

##### `selectiveContentGuarding`<sup>Optional</sup> <a name="selectiveContentGuarding" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.selectiveContentGuarding"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding">BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding</a>>

selective_content_guarding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/bedrock_enforced_guardrail_configuration#selective_content_guarding BedrockEnforcedGuardrailConfiguration#selective_content_guarding}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.putModelEnforcement">putModelEnforcement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.putSelectiveContentGuarding">putSelectiveContentGuarding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.resetModelEnforcement">resetModelEnforcement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.resetSelectiveContentGuarding">resetSelectiveContentGuarding</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putModelEnforcement` <a name="putModelEnforcement" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.putModelEnforcement"></a>

```java
public void putModelEnforcement(IResolvable|java.util.List<BedrockEnforcedGuardrailConfigurationModelEnforcement> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.putModelEnforcement.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcement">BedrockEnforcedGuardrailConfigurationModelEnforcement</a>>

---

##### `putSelectiveContentGuarding` <a name="putSelectiveContentGuarding" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.putSelectiveContentGuarding"></a>

```java
public void putSelectiveContentGuarding(IResolvable|java.util.List<BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.putSelectiveContentGuarding.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding">BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding</a>>

---

##### `resetModelEnforcement` <a name="resetModelEnforcement" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.resetModelEnforcement"></a>

```java
public void resetModelEnforcement()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetSelectiveContentGuarding` <a name="resetSelectiveContentGuarding" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.resetSelectiveContentGuarding"></a>

```java
public void resetSelectiveContentGuarding()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BedrockEnforcedGuardrailConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.isConstruct"></a>

```java
import io.cdktn.providers.aws.bedrock_enforced_guardrail_configuration.BedrockEnforcedGuardrailConfiguration;

BedrockEnforcedGuardrailConfiguration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.bedrock_enforced_guardrail_configuration.BedrockEnforcedGuardrailConfiguration;

BedrockEnforcedGuardrailConfiguration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.bedrock_enforced_guardrail_configuration.BedrockEnforcedGuardrailConfiguration;

BedrockEnforcedGuardrailConfiguration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.bedrock_enforced_guardrail_configuration.BedrockEnforcedGuardrailConfiguration;

BedrockEnforcedGuardrailConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BedrockEnforcedGuardrailConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a BedrockEnforcedGuardrailConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BedrockEnforcedGuardrailConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BedrockEnforcedGuardrailConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/bedrock_enforced_guardrail_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the BedrockEnforcedGuardrailConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.configId">configId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.guardrailId">guardrailId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.modelEnforcement">modelEnforcement</a></code> | <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementList">BedrockEnforcedGuardrailConfigurationModelEnforcementList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.selectiveContentGuarding">selectiveContentGuarding</a></code> | <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList">BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.guardrailArnInput">guardrailArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.guardrailVersionInput">guardrailVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.modelEnforcementInput">modelEnforcementInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcement">BedrockEnforcedGuardrailConfigurationModelEnforcement</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.selectiveContentGuardingInput">selectiveContentGuardingInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding">BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.guardrailArn">guardrailArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.guardrailVersion">guardrailVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `configId`<sup>Required</sup> <a name="configId" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.configId"></a>

```java
public java.lang.String getConfigId();
```

- *Type:* java.lang.String

---

##### `guardrailId`<sup>Required</sup> <a name="guardrailId" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.guardrailId"></a>

```java
public java.lang.String getGuardrailId();
```

- *Type:* java.lang.String

---

##### `modelEnforcement`<sup>Required</sup> <a name="modelEnforcement" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.modelEnforcement"></a>

```java
public BedrockEnforcedGuardrailConfigurationModelEnforcementList getModelEnforcement();
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementList">BedrockEnforcedGuardrailConfigurationModelEnforcementList</a>

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `selectiveContentGuarding`<sup>Required</sup> <a name="selectiveContentGuarding" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.selectiveContentGuarding"></a>

```java
public BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList getSelectiveContentGuarding();
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList">BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList</a>

---

##### `guardrailArnInput`<sup>Optional</sup> <a name="guardrailArnInput" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.guardrailArnInput"></a>

```java
public java.lang.String getGuardrailArnInput();
```

- *Type:* java.lang.String

---

##### `guardrailVersionInput`<sup>Optional</sup> <a name="guardrailVersionInput" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.guardrailVersionInput"></a>

```java
public java.lang.String getGuardrailVersionInput();
```

- *Type:* java.lang.String

---

##### `modelEnforcementInput`<sup>Optional</sup> <a name="modelEnforcementInput" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.modelEnforcementInput"></a>

```java
public IResolvable|java.util.List<BedrockEnforcedGuardrailConfigurationModelEnforcement> getModelEnforcementInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcement">BedrockEnforcedGuardrailConfigurationModelEnforcement</a>>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `selectiveContentGuardingInput`<sup>Optional</sup> <a name="selectiveContentGuardingInput" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.selectiveContentGuardingInput"></a>

```java
public IResolvable|java.util.List<BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding> getSelectiveContentGuardingInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding">BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding</a>>

---

##### `guardrailArn`<sup>Required</sup> <a name="guardrailArn" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.guardrailArn"></a>

```java
public java.lang.String getGuardrailArn();
```

- *Type:* java.lang.String

---

##### `guardrailVersion`<sup>Required</sup> <a name="guardrailVersion" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.guardrailVersion"></a>

```java
public java.lang.String getGuardrailVersion();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockEnforcedGuardrailConfigurationConfig <a name="BedrockEnforcedGuardrailConfigurationConfig" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrock_enforced_guardrail_configuration.BedrockEnforcedGuardrailConfigurationConfig;

BedrockEnforcedGuardrailConfigurationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .guardrailArn(java.lang.String)
    .guardrailVersion(java.lang.String)
//  .modelEnforcement(IResolvable|java.util.List<BedrockEnforcedGuardrailConfigurationModelEnforcement>)
//  .region(java.lang.String)
//  .selectiveContentGuarding(IResolvable|java.util.List<BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.guardrailArn">guardrailArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/bedrock_enforced_guardrail_configuration#guardrail_arn BedrockEnforcedGuardrailConfiguration#guardrail_arn}. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.guardrailVersion">guardrailVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/bedrock_enforced_guardrail_configuration#guardrail_version BedrockEnforcedGuardrailConfiguration#guardrail_version}. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.modelEnforcement">modelEnforcement</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcement">BedrockEnforcedGuardrailConfigurationModelEnforcement</a>></code> | model_enforcement block. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.selectiveContentGuarding">selectiveContentGuarding</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding">BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding</a>></code> | selective_content_guarding block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `guardrailArn`<sup>Required</sup> <a name="guardrailArn" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.guardrailArn"></a>

```java
public java.lang.String getGuardrailArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/bedrock_enforced_guardrail_configuration#guardrail_arn BedrockEnforcedGuardrailConfiguration#guardrail_arn}.

---

##### `guardrailVersion`<sup>Required</sup> <a name="guardrailVersion" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.guardrailVersion"></a>

```java
public java.lang.String getGuardrailVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/bedrock_enforced_guardrail_configuration#guardrail_version BedrockEnforcedGuardrailConfiguration#guardrail_version}.

---

##### `modelEnforcement`<sup>Optional</sup> <a name="modelEnforcement" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.modelEnforcement"></a>

```java
public IResolvable|java.util.List<BedrockEnforcedGuardrailConfigurationModelEnforcement> getModelEnforcement();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcement">BedrockEnforcedGuardrailConfigurationModelEnforcement</a>>

model_enforcement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/bedrock_enforced_guardrail_configuration#model_enforcement BedrockEnforcedGuardrailConfiguration#model_enforcement}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/bedrock_enforced_guardrail_configuration#region BedrockEnforcedGuardrailConfiguration#region}

---

##### `selectiveContentGuarding`<sup>Optional</sup> <a name="selectiveContentGuarding" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.selectiveContentGuarding"></a>

```java
public IResolvable|java.util.List<BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding> getSelectiveContentGuarding();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding">BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding</a>>

selective_content_guarding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/bedrock_enforced_guardrail_configuration#selective_content_guarding BedrockEnforcedGuardrailConfiguration#selective_content_guarding}

---

### BedrockEnforcedGuardrailConfigurationModelEnforcement <a name="BedrockEnforcedGuardrailConfigurationModelEnforcement" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcement.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrock_enforced_guardrail_configuration.BedrockEnforcedGuardrailConfigurationModelEnforcement;

BedrockEnforcedGuardrailConfigurationModelEnforcement.builder()
    .excludedModels(java.util.List<java.lang.String>)
    .includedModels(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcement.property.excludedModels">excludedModels</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/bedrock_enforced_guardrail_configuration#excluded_models BedrockEnforcedGuardrailConfiguration#excluded_models}. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcement.property.includedModels">includedModels</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/bedrock_enforced_guardrail_configuration#included_models BedrockEnforcedGuardrailConfiguration#included_models}. |

---

##### `excludedModels`<sup>Required</sup> <a name="excludedModels" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcement.property.excludedModels"></a>

```java
public java.util.List<java.lang.String> getExcludedModels();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/bedrock_enforced_guardrail_configuration#excluded_models BedrockEnforcedGuardrailConfiguration#excluded_models}.

---

##### `includedModels`<sup>Required</sup> <a name="includedModels" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcement.property.includedModels"></a>

```java
public java.util.List<java.lang.String> getIncludedModels();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/bedrock_enforced_guardrail_configuration#included_models BedrockEnforcedGuardrailConfiguration#included_models}.

---

### BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding <a name="BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrock_enforced_guardrail_configuration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding;

BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding.builder()
//  .messages(java.lang.String)
//  .systemAttribute(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding.property.messages">messages</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/bedrock_enforced_guardrail_configuration#messages BedrockEnforcedGuardrailConfiguration#messages}. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding.property.systemAttribute">systemAttribute</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/bedrock_enforced_guardrail_configuration#system BedrockEnforcedGuardrailConfiguration#system}. |

---

##### `messages`<sup>Optional</sup> <a name="messages" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding.property.messages"></a>

```java
public java.lang.String getMessages();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/bedrock_enforced_guardrail_configuration#messages BedrockEnforcedGuardrailConfiguration#messages}.

---

##### `systemAttribute`<sup>Optional</sup> <a name="systemAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding.property.systemAttribute"></a>

```java
public java.lang.String getSystemAttribute();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/bedrock_enforced_guardrail_configuration#system BedrockEnforcedGuardrailConfiguration#system}.

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockEnforcedGuardrailConfigurationModelEnforcementList <a name="BedrockEnforcedGuardrailConfigurationModelEnforcementList" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementList.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrock_enforced_guardrail_configuration.BedrockEnforcedGuardrailConfigurationModelEnforcementList;

new BedrockEnforcedGuardrailConfigurationModelEnforcementList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementList.get"></a>

```java
public BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcement">BedrockEnforcedGuardrailConfigurationModelEnforcement</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BedrockEnforcedGuardrailConfigurationModelEnforcement> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcement">BedrockEnforcedGuardrailConfigurationModelEnforcement</a>>

---


### BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference <a name="BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrock_enforced_guardrail_configuration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference;

new BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.excludedModelsInput">excludedModelsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.includedModelsInput">includedModelsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.excludedModels">excludedModels</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.includedModels">includedModels</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcement">BedrockEnforcedGuardrailConfigurationModelEnforcement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `excludedModelsInput`<sup>Optional</sup> <a name="excludedModelsInput" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.excludedModelsInput"></a>

```java
public java.util.List<java.lang.String> getExcludedModelsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includedModelsInput`<sup>Optional</sup> <a name="includedModelsInput" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.includedModelsInput"></a>

```java
public java.util.List<java.lang.String> getIncludedModelsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `excludedModels`<sup>Required</sup> <a name="excludedModels" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.excludedModels"></a>

```java
public java.util.List<java.lang.String> getExcludedModels();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includedModels`<sup>Required</sup> <a name="includedModels" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.includedModels"></a>

```java
public java.util.List<java.lang.String> getIncludedModels();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockEnforcedGuardrailConfigurationModelEnforcement getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcement">BedrockEnforcedGuardrailConfigurationModelEnforcement</a>

---


### BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList <a name="BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrock_enforced_guardrail_configuration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList;

new BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList.get"></a>

```java
public BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding">BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding">BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding</a>>

---


### BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference <a name="BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.bedrock_enforced_guardrail_configuration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference;

new BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.resetMessages">resetMessages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.resetSystemAttribute">resetSystemAttribute</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMessages` <a name="resetMessages" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.resetMessages"></a>

```java
public void resetMessages()
```

##### `resetSystemAttribute` <a name="resetSystemAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.resetSystemAttribute"></a>

```java
public void resetSystemAttribute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.messagesInput">messagesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.systemAttributeInput">systemAttributeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.messages">messages</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.systemAttribute">systemAttribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding">BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `messagesInput`<sup>Optional</sup> <a name="messagesInput" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.messagesInput"></a>

```java
public java.lang.String getMessagesInput();
```

- *Type:* java.lang.String

---

##### `systemAttributeInput`<sup>Optional</sup> <a name="systemAttributeInput" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.systemAttributeInput"></a>

```java
public java.lang.String getSystemAttributeInput();
```

- *Type:* java.lang.String

---

##### `messages`<sup>Required</sup> <a name="messages" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.messages"></a>

```java
public java.lang.String getMessages();
```

- *Type:* java.lang.String

---

##### `systemAttribute`<sup>Required</sup> <a name="systemAttribute" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.systemAttribute"></a>

```java
public java.lang.String getSystemAttribute();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.internalValue"></a>

```java
public IResolvable|BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding">BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding</a>

---



