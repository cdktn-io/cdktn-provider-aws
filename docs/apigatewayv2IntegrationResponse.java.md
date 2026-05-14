# `apigatewayv2IntegrationResponse` Submodule <a name="`apigatewayv2IntegrationResponse` Submodule" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Apigatewayv2IntegrationResponse <a name="Apigatewayv2IntegrationResponse" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/apigatewayv2_integration_response aws_apigatewayv2_integration_response}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.Initializer"></a>

```java
import io.cdktn.providers.aws.apigatewayv2_integration_response.Apigatewayv2IntegrationResponse;

Apigatewayv2IntegrationResponse.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .apiId(java.lang.String)
    .integrationId(java.lang.String)
    .integrationResponseKey(java.lang.String)
//  .contentHandlingStrategy(java.lang.String)
//  .id(java.lang.String)
//  .region(java.lang.String)
//  .responseTemplates(java.util.Map<java.lang.String, java.lang.String>)
//  .templateSelectionExpression(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.Initializer.parameter.apiId">apiId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/apigatewayv2_integration_response#api_id Apigatewayv2IntegrationResponse#api_id}. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.Initializer.parameter.integrationId">integrationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/apigatewayv2_integration_response#integration_id Apigatewayv2IntegrationResponse#integration_id}. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.Initializer.parameter.integrationResponseKey">integrationResponseKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/apigatewayv2_integration_response#integration_response_key Apigatewayv2IntegrationResponse#integration_response_key}. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.Initializer.parameter.contentHandlingStrategy">contentHandlingStrategy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/apigatewayv2_integration_response#content_handling_strategy Apigatewayv2IntegrationResponse#content_handling_strategy}. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/apigatewayv2_integration_response#id Apigatewayv2IntegrationResponse#id}. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.Initializer.parameter.responseTemplates">responseTemplates</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/apigatewayv2_integration_response#response_templates Apigatewayv2IntegrationResponse#response_templates}. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.Initializer.parameter.templateSelectionExpression">templateSelectionExpression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/apigatewayv2_integration_response#template_selection_expression Apigatewayv2IntegrationResponse#template_selection_expression}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.Initializer.parameter.apiId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/apigatewayv2_integration_response#api_id Apigatewayv2IntegrationResponse#api_id}.

---

##### `integrationId`<sup>Required</sup> <a name="integrationId" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.Initializer.parameter.integrationId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/apigatewayv2_integration_response#integration_id Apigatewayv2IntegrationResponse#integration_id}.

---

##### `integrationResponseKey`<sup>Required</sup> <a name="integrationResponseKey" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.Initializer.parameter.integrationResponseKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/apigatewayv2_integration_response#integration_response_key Apigatewayv2IntegrationResponse#integration_response_key}.

---

##### `contentHandlingStrategy`<sup>Optional</sup> <a name="contentHandlingStrategy" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.Initializer.parameter.contentHandlingStrategy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/apigatewayv2_integration_response#content_handling_strategy Apigatewayv2IntegrationResponse#content_handling_strategy}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/apigatewayv2_integration_response#id Apigatewayv2IntegrationResponse#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/apigatewayv2_integration_response#region Apigatewayv2IntegrationResponse#region}

---

##### `responseTemplates`<sup>Optional</sup> <a name="responseTemplates" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.Initializer.parameter.responseTemplates"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/apigatewayv2_integration_response#response_templates Apigatewayv2IntegrationResponse#response_templates}.

---

##### `templateSelectionExpression`<sup>Optional</sup> <a name="templateSelectionExpression" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.Initializer.parameter.templateSelectionExpression"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/apigatewayv2_integration_response#template_selection_expression Apigatewayv2IntegrationResponse#template_selection_expression}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.resetContentHandlingStrategy">resetContentHandlingStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.resetResponseTemplates">resetResponseTemplates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.resetTemplateSelectionExpression">resetTemplateSelectionExpression</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetContentHandlingStrategy` <a name="resetContentHandlingStrategy" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.resetContentHandlingStrategy"></a>

```java
public void resetContentHandlingStrategy()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.resetId"></a>

```java
public void resetId()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetResponseTemplates` <a name="resetResponseTemplates" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.resetResponseTemplates"></a>

```java
public void resetResponseTemplates()
```

##### `resetTemplateSelectionExpression` <a name="resetTemplateSelectionExpression" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.resetTemplateSelectionExpression"></a>

```java
public void resetTemplateSelectionExpression()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Apigatewayv2IntegrationResponse resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.isConstruct"></a>

```java
import io.cdktn.providers.aws.apigatewayv2_integration_response.Apigatewayv2IntegrationResponse;

Apigatewayv2IntegrationResponse.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.apigatewayv2_integration_response.Apigatewayv2IntegrationResponse;

Apigatewayv2IntegrationResponse.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.apigatewayv2_integration_response.Apigatewayv2IntegrationResponse;

Apigatewayv2IntegrationResponse.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.apigatewayv2_integration_response.Apigatewayv2IntegrationResponse;

Apigatewayv2IntegrationResponse.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Apigatewayv2IntegrationResponse.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Apigatewayv2IntegrationResponse resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Apigatewayv2IntegrationResponse to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Apigatewayv2IntegrationResponse that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/apigatewayv2_integration_response#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Apigatewayv2IntegrationResponse to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.apiIdInput">apiIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.contentHandlingStrategyInput">contentHandlingStrategyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.integrationIdInput">integrationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.integrationResponseKeyInput">integrationResponseKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.responseTemplatesInput">responseTemplatesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.templateSelectionExpressionInput">templateSelectionExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.apiId">apiId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.contentHandlingStrategy">contentHandlingStrategy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.integrationId">integrationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.integrationResponseKey">integrationResponseKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.responseTemplates">responseTemplates</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.templateSelectionExpression">templateSelectionExpression</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `apiIdInput`<sup>Optional</sup> <a name="apiIdInput" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.apiIdInput"></a>

```java
public java.lang.String getApiIdInput();
```

- *Type:* java.lang.String

---

##### `contentHandlingStrategyInput`<sup>Optional</sup> <a name="contentHandlingStrategyInput" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.contentHandlingStrategyInput"></a>

```java
public java.lang.String getContentHandlingStrategyInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `integrationIdInput`<sup>Optional</sup> <a name="integrationIdInput" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.integrationIdInput"></a>

```java
public java.lang.String getIntegrationIdInput();
```

- *Type:* java.lang.String

---

##### `integrationResponseKeyInput`<sup>Optional</sup> <a name="integrationResponseKeyInput" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.integrationResponseKeyInput"></a>

```java
public java.lang.String getIntegrationResponseKeyInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `responseTemplatesInput`<sup>Optional</sup> <a name="responseTemplatesInput" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.responseTemplatesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getResponseTemplatesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `templateSelectionExpressionInput`<sup>Optional</sup> <a name="templateSelectionExpressionInput" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.templateSelectionExpressionInput"></a>

```java
public java.lang.String getTemplateSelectionExpressionInput();
```

- *Type:* java.lang.String

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.apiId"></a>

```java
public java.lang.String getApiId();
```

- *Type:* java.lang.String

---

##### `contentHandlingStrategy`<sup>Required</sup> <a name="contentHandlingStrategy" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.contentHandlingStrategy"></a>

```java
public java.lang.String getContentHandlingStrategy();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `integrationId`<sup>Required</sup> <a name="integrationId" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.integrationId"></a>

```java
public java.lang.String getIntegrationId();
```

- *Type:* java.lang.String

---

##### `integrationResponseKey`<sup>Required</sup> <a name="integrationResponseKey" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.integrationResponseKey"></a>

```java
public java.lang.String getIntegrationResponseKey();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `responseTemplates`<sup>Required</sup> <a name="responseTemplates" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.responseTemplates"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getResponseTemplates();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `templateSelectionExpression`<sup>Required</sup> <a name="templateSelectionExpression" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.templateSelectionExpression"></a>

```java
public java.lang.String getTemplateSelectionExpression();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Apigatewayv2IntegrationResponseConfig <a name="Apigatewayv2IntegrationResponseConfig" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.apigatewayv2_integration_response.Apigatewayv2IntegrationResponseConfig;

Apigatewayv2IntegrationResponseConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .apiId(java.lang.String)
    .integrationId(java.lang.String)
    .integrationResponseKey(java.lang.String)
//  .contentHandlingStrategy(java.lang.String)
//  .id(java.lang.String)
//  .region(java.lang.String)
//  .responseTemplates(java.util.Map<java.lang.String, java.lang.String>)
//  .templateSelectionExpression(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.apiId">apiId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/apigatewayv2_integration_response#api_id Apigatewayv2IntegrationResponse#api_id}. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.integrationId">integrationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/apigatewayv2_integration_response#integration_id Apigatewayv2IntegrationResponse#integration_id}. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.integrationResponseKey">integrationResponseKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/apigatewayv2_integration_response#integration_response_key Apigatewayv2IntegrationResponse#integration_response_key}. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.contentHandlingStrategy">contentHandlingStrategy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/apigatewayv2_integration_response#content_handling_strategy Apigatewayv2IntegrationResponse#content_handling_strategy}. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/apigatewayv2_integration_response#id Apigatewayv2IntegrationResponse#id}. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.responseTemplates">responseTemplates</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/apigatewayv2_integration_response#response_templates Apigatewayv2IntegrationResponse#response_templates}. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.templateSelectionExpression">templateSelectionExpression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/apigatewayv2_integration_response#template_selection_expression Apigatewayv2IntegrationResponse#template_selection_expression}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.apiId"></a>

```java
public java.lang.String getApiId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/apigatewayv2_integration_response#api_id Apigatewayv2IntegrationResponse#api_id}.

---

##### `integrationId`<sup>Required</sup> <a name="integrationId" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.integrationId"></a>

```java
public java.lang.String getIntegrationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/apigatewayv2_integration_response#integration_id Apigatewayv2IntegrationResponse#integration_id}.

---

##### `integrationResponseKey`<sup>Required</sup> <a name="integrationResponseKey" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.integrationResponseKey"></a>

```java
public java.lang.String getIntegrationResponseKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/apigatewayv2_integration_response#integration_response_key Apigatewayv2IntegrationResponse#integration_response_key}.

---

##### `contentHandlingStrategy`<sup>Optional</sup> <a name="contentHandlingStrategy" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.contentHandlingStrategy"></a>

```java
public java.lang.String getContentHandlingStrategy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/apigatewayv2_integration_response#content_handling_strategy Apigatewayv2IntegrationResponse#content_handling_strategy}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/apigatewayv2_integration_response#id Apigatewayv2IntegrationResponse#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/apigatewayv2_integration_response#region Apigatewayv2IntegrationResponse#region}

---

##### `responseTemplates`<sup>Optional</sup> <a name="responseTemplates" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.responseTemplates"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getResponseTemplates();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/apigatewayv2_integration_response#response_templates Apigatewayv2IntegrationResponse#response_templates}.

---

##### `templateSelectionExpression`<sup>Optional</sup> <a name="templateSelectionExpression" id="@cdktn/provider-aws.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.templateSelectionExpression"></a>

```java
public java.lang.String getTemplateSelectionExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/apigatewayv2_integration_response#template_selection_expression Apigatewayv2IntegrationResponse#template_selection_expression}.

---



