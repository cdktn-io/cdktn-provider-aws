# `apigatewayv2Route` Submodule <a name="`apigatewayv2Route` Submodule" id="@cdktn/provider-aws.apigatewayv2Route"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Apigatewayv2Route <a name="Apigatewayv2Route" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/apigatewayv2_route aws_apigatewayv2_route}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer"></a>

```java
import io.cdktn.providers.aws.apigatewayv2_route.Apigatewayv2Route;

Apigatewayv2Route.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .apiId(java.lang.String)
    .routeKey(java.lang.String)
//  .apiKeyRequired(java.lang.Boolean|IResolvable)
//  .authorizationScopes(java.util.List<java.lang.String>)
//  .authorizationType(java.lang.String)
//  .authorizerId(java.lang.String)
//  .id(java.lang.String)
//  .modelSelectionExpression(java.lang.String)
//  .operationName(java.lang.String)
//  .region(java.lang.String)
//  .requestModels(java.util.Map<java.lang.String, java.lang.String>)
//  .requestParameter(IResolvable|java.util.List<Apigatewayv2RouteRequestParameter>)
//  .routeResponseSelectionExpression(java.lang.String)
//  .target(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.apiId">apiId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/apigatewayv2_route#api_id Apigatewayv2Route#api_id}. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.routeKey">routeKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/apigatewayv2_route#route_key Apigatewayv2Route#route_key}. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.apiKeyRequired">apiKeyRequired</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/apigatewayv2_route#api_key_required Apigatewayv2Route#api_key_required}. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.authorizationScopes">authorizationScopes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/apigatewayv2_route#authorization_scopes Apigatewayv2Route#authorization_scopes}. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.authorizationType">authorizationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/apigatewayv2_route#authorization_type Apigatewayv2Route#authorization_type}. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.authorizerId">authorizerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/apigatewayv2_route#authorizer_id Apigatewayv2Route#authorizer_id}. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/apigatewayv2_route#id Apigatewayv2Route#id}. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.modelSelectionExpression">modelSelectionExpression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/apigatewayv2_route#model_selection_expression Apigatewayv2Route#model_selection_expression}. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.operationName">operationName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/apigatewayv2_route#operation_name Apigatewayv2Route#operation_name}. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.requestModels">requestModels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/apigatewayv2_route#request_models Apigatewayv2Route#request_models}. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.requestParameter">requestParameter</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameter">Apigatewayv2RouteRequestParameter</a>></code> | request_parameter block. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.routeResponseSelectionExpression">routeResponseSelectionExpression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/apigatewayv2_route#route_response_selection_expression Apigatewayv2Route#route_response_selection_expression}. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.target">target</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/apigatewayv2_route#target Apigatewayv2Route#target}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.apiId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/apigatewayv2_route#api_id Apigatewayv2Route#api_id}.

---

##### `routeKey`<sup>Required</sup> <a name="routeKey" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.routeKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/apigatewayv2_route#route_key Apigatewayv2Route#route_key}.

---

##### `apiKeyRequired`<sup>Optional</sup> <a name="apiKeyRequired" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.apiKeyRequired"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/apigatewayv2_route#api_key_required Apigatewayv2Route#api_key_required}.

---

##### `authorizationScopes`<sup>Optional</sup> <a name="authorizationScopes" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.authorizationScopes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/apigatewayv2_route#authorization_scopes Apigatewayv2Route#authorization_scopes}.

---

##### `authorizationType`<sup>Optional</sup> <a name="authorizationType" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.authorizationType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/apigatewayv2_route#authorization_type Apigatewayv2Route#authorization_type}.

---

##### `authorizerId`<sup>Optional</sup> <a name="authorizerId" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.authorizerId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/apigatewayv2_route#authorizer_id Apigatewayv2Route#authorizer_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/apigatewayv2_route#id Apigatewayv2Route#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `modelSelectionExpression`<sup>Optional</sup> <a name="modelSelectionExpression" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.modelSelectionExpression"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/apigatewayv2_route#model_selection_expression Apigatewayv2Route#model_selection_expression}.

---

##### `operationName`<sup>Optional</sup> <a name="operationName" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.operationName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/apigatewayv2_route#operation_name Apigatewayv2Route#operation_name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/apigatewayv2_route#region Apigatewayv2Route#region}

---

##### `requestModels`<sup>Optional</sup> <a name="requestModels" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.requestModels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/apigatewayv2_route#request_models Apigatewayv2Route#request_models}.

---

##### `requestParameter`<sup>Optional</sup> <a name="requestParameter" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.requestParameter"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameter">Apigatewayv2RouteRequestParameter</a>>

request_parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/apigatewayv2_route#request_parameter Apigatewayv2Route#request_parameter}

---

##### `routeResponseSelectionExpression`<sup>Optional</sup> <a name="routeResponseSelectionExpression" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.routeResponseSelectionExpression"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/apigatewayv2_route#route_response_selection_expression Apigatewayv2Route#route_response_selection_expression}.

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.Initializer.parameter.target"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/apigatewayv2_route#target Apigatewayv2Route#target}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.putRequestParameter">putRequestParameter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetApiKeyRequired">resetApiKeyRequired</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetAuthorizationScopes">resetAuthorizationScopes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetAuthorizationType">resetAuthorizationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetAuthorizerId">resetAuthorizerId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetModelSelectionExpression">resetModelSelectionExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetOperationName">resetOperationName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetRequestModels">resetRequestModels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetRequestParameter">resetRequestParameter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetRouteResponseSelectionExpression">resetRouteResponseSelectionExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetTarget">resetTarget</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRequestParameter` <a name="putRequestParameter" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.putRequestParameter"></a>

```java
public void putRequestParameter(IResolvable|java.util.List<Apigatewayv2RouteRequestParameter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.putRequestParameter.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameter">Apigatewayv2RouteRequestParameter</a>>

---

##### `resetApiKeyRequired` <a name="resetApiKeyRequired" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetApiKeyRequired"></a>

```java
public void resetApiKeyRequired()
```

##### `resetAuthorizationScopes` <a name="resetAuthorizationScopes" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetAuthorizationScopes"></a>

```java
public void resetAuthorizationScopes()
```

##### `resetAuthorizationType` <a name="resetAuthorizationType" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetAuthorizationType"></a>

```java
public void resetAuthorizationType()
```

##### `resetAuthorizerId` <a name="resetAuthorizerId" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetAuthorizerId"></a>

```java
public void resetAuthorizerId()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetId"></a>

```java
public void resetId()
```

##### `resetModelSelectionExpression` <a name="resetModelSelectionExpression" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetModelSelectionExpression"></a>

```java
public void resetModelSelectionExpression()
```

##### `resetOperationName` <a name="resetOperationName" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetOperationName"></a>

```java
public void resetOperationName()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetRequestModels` <a name="resetRequestModels" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetRequestModels"></a>

```java
public void resetRequestModels()
```

##### `resetRequestParameter` <a name="resetRequestParameter" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetRequestParameter"></a>

```java
public void resetRequestParameter()
```

##### `resetRouteResponseSelectionExpression` <a name="resetRouteResponseSelectionExpression" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetRouteResponseSelectionExpression"></a>

```java
public void resetRouteResponseSelectionExpression()
```

##### `resetTarget` <a name="resetTarget" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.resetTarget"></a>

```java
public void resetTarget()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Apigatewayv2Route resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.isConstruct"></a>

```java
import io.cdktn.providers.aws.apigatewayv2_route.Apigatewayv2Route;

Apigatewayv2Route.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.apigatewayv2_route.Apigatewayv2Route;

Apigatewayv2Route.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.apigatewayv2_route.Apigatewayv2Route;

Apigatewayv2Route.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.apigatewayv2_route.Apigatewayv2Route;

Apigatewayv2Route.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Apigatewayv2Route.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Apigatewayv2Route resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Apigatewayv2Route to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Apigatewayv2Route that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/apigatewayv2_route#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Apigatewayv2Route to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.requestParameter">requestParameter</a></code> | <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList">Apigatewayv2RouteRequestParameterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.apiIdInput">apiIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.apiKeyRequiredInput">apiKeyRequiredInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.authorizationScopesInput">authorizationScopesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.authorizationTypeInput">authorizationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.authorizerIdInput">authorizerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.modelSelectionExpressionInput">modelSelectionExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.operationNameInput">operationNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.requestModelsInput">requestModelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.requestParameterInput">requestParameterInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameter">Apigatewayv2RouteRequestParameter</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.routeKeyInput">routeKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.routeResponseSelectionExpressionInput">routeResponseSelectionExpressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.targetInput">targetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.apiId">apiId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.apiKeyRequired">apiKeyRequired</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.authorizationScopes">authorizationScopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.authorizationType">authorizationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.authorizerId">authorizerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.modelSelectionExpression">modelSelectionExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.operationName">operationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.requestModels">requestModels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.routeKey">routeKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.routeResponseSelectionExpression">routeResponseSelectionExpression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.target">target</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `requestParameter`<sup>Required</sup> <a name="requestParameter" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.requestParameter"></a>

```java
public Apigatewayv2RouteRequestParameterList getRequestParameter();
```

- *Type:* <a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList">Apigatewayv2RouteRequestParameterList</a>

---

##### `apiIdInput`<sup>Optional</sup> <a name="apiIdInput" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.apiIdInput"></a>

```java
public java.lang.String getApiIdInput();
```

- *Type:* java.lang.String

---

##### `apiKeyRequiredInput`<sup>Optional</sup> <a name="apiKeyRequiredInput" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.apiKeyRequiredInput"></a>

```java
public java.lang.Boolean|IResolvable getApiKeyRequiredInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `authorizationScopesInput`<sup>Optional</sup> <a name="authorizationScopesInput" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.authorizationScopesInput"></a>

```java
public java.util.List<java.lang.String> getAuthorizationScopesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `authorizationTypeInput`<sup>Optional</sup> <a name="authorizationTypeInput" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.authorizationTypeInput"></a>

```java
public java.lang.String getAuthorizationTypeInput();
```

- *Type:* java.lang.String

---

##### `authorizerIdInput`<sup>Optional</sup> <a name="authorizerIdInput" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.authorizerIdInput"></a>

```java
public java.lang.String getAuthorizerIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `modelSelectionExpressionInput`<sup>Optional</sup> <a name="modelSelectionExpressionInput" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.modelSelectionExpressionInput"></a>

```java
public java.lang.String getModelSelectionExpressionInput();
```

- *Type:* java.lang.String

---

##### `operationNameInput`<sup>Optional</sup> <a name="operationNameInput" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.operationNameInput"></a>

```java
public java.lang.String getOperationNameInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `requestModelsInput`<sup>Optional</sup> <a name="requestModelsInput" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.requestModelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRequestModelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `requestParameterInput`<sup>Optional</sup> <a name="requestParameterInput" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.requestParameterInput"></a>

```java
public IResolvable|java.util.List<Apigatewayv2RouteRequestParameter> getRequestParameterInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameter">Apigatewayv2RouteRequestParameter</a>>

---

##### `routeKeyInput`<sup>Optional</sup> <a name="routeKeyInput" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.routeKeyInput"></a>

```java
public java.lang.String getRouteKeyInput();
```

- *Type:* java.lang.String

---

##### `routeResponseSelectionExpressionInput`<sup>Optional</sup> <a name="routeResponseSelectionExpressionInput" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.routeResponseSelectionExpressionInput"></a>

```java
public java.lang.String getRouteResponseSelectionExpressionInput();
```

- *Type:* java.lang.String

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.targetInput"></a>

```java
public java.lang.String getTargetInput();
```

- *Type:* java.lang.String

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.apiId"></a>

```java
public java.lang.String getApiId();
```

- *Type:* java.lang.String

---

##### `apiKeyRequired`<sup>Required</sup> <a name="apiKeyRequired" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.apiKeyRequired"></a>

```java
public java.lang.Boolean|IResolvable getApiKeyRequired();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `authorizationScopes`<sup>Required</sup> <a name="authorizationScopes" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.authorizationScopes"></a>

```java
public java.util.List<java.lang.String> getAuthorizationScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `authorizationType`<sup>Required</sup> <a name="authorizationType" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.authorizationType"></a>

```java
public java.lang.String getAuthorizationType();
```

- *Type:* java.lang.String

---

##### `authorizerId`<sup>Required</sup> <a name="authorizerId" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.authorizerId"></a>

```java
public java.lang.String getAuthorizerId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `modelSelectionExpression`<sup>Required</sup> <a name="modelSelectionExpression" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.modelSelectionExpression"></a>

```java
public java.lang.String getModelSelectionExpression();
```

- *Type:* java.lang.String

---

##### `operationName`<sup>Required</sup> <a name="operationName" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.operationName"></a>

```java
public java.lang.String getOperationName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `requestModels`<sup>Required</sup> <a name="requestModels" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.requestModels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRequestModels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `routeKey`<sup>Required</sup> <a name="routeKey" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.routeKey"></a>

```java
public java.lang.String getRouteKey();
```

- *Type:* java.lang.String

---

##### `routeResponseSelectionExpression`<sup>Required</sup> <a name="routeResponseSelectionExpression" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.routeResponseSelectionExpression"></a>

```java
public java.lang.String getRouteResponseSelectionExpression();
```

- *Type:* java.lang.String

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2Route.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Apigatewayv2RouteConfig <a name="Apigatewayv2RouteConfig" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.apigatewayv2_route.Apigatewayv2RouteConfig;

Apigatewayv2RouteConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .apiId(java.lang.String)
    .routeKey(java.lang.String)
//  .apiKeyRequired(java.lang.Boolean|IResolvable)
//  .authorizationScopes(java.util.List<java.lang.String>)
//  .authorizationType(java.lang.String)
//  .authorizerId(java.lang.String)
//  .id(java.lang.String)
//  .modelSelectionExpression(java.lang.String)
//  .operationName(java.lang.String)
//  .region(java.lang.String)
//  .requestModels(java.util.Map<java.lang.String, java.lang.String>)
//  .requestParameter(IResolvable|java.util.List<Apigatewayv2RouteRequestParameter>)
//  .routeResponseSelectionExpression(java.lang.String)
//  .target(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.apiId">apiId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/apigatewayv2_route#api_id Apigatewayv2Route#api_id}. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.routeKey">routeKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/apigatewayv2_route#route_key Apigatewayv2Route#route_key}. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.apiKeyRequired">apiKeyRequired</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/apigatewayv2_route#api_key_required Apigatewayv2Route#api_key_required}. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.authorizationScopes">authorizationScopes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/apigatewayv2_route#authorization_scopes Apigatewayv2Route#authorization_scopes}. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.authorizationType">authorizationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/apigatewayv2_route#authorization_type Apigatewayv2Route#authorization_type}. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.authorizerId">authorizerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/apigatewayv2_route#authorizer_id Apigatewayv2Route#authorizer_id}. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/apigatewayv2_route#id Apigatewayv2Route#id}. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.modelSelectionExpression">modelSelectionExpression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/apigatewayv2_route#model_selection_expression Apigatewayv2Route#model_selection_expression}. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.operationName">operationName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/apigatewayv2_route#operation_name Apigatewayv2Route#operation_name}. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.requestModels">requestModels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/apigatewayv2_route#request_models Apigatewayv2Route#request_models}. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.requestParameter">requestParameter</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameter">Apigatewayv2RouteRequestParameter</a>></code> | request_parameter block. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.routeResponseSelectionExpression">routeResponseSelectionExpression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/apigatewayv2_route#route_response_selection_expression Apigatewayv2Route#route_response_selection_expression}. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.target">target</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/apigatewayv2_route#target Apigatewayv2Route#target}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.apiId"></a>

```java
public java.lang.String getApiId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/apigatewayv2_route#api_id Apigatewayv2Route#api_id}.

---

##### `routeKey`<sup>Required</sup> <a name="routeKey" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.routeKey"></a>

```java
public java.lang.String getRouteKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/apigatewayv2_route#route_key Apigatewayv2Route#route_key}.

---

##### `apiKeyRequired`<sup>Optional</sup> <a name="apiKeyRequired" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.apiKeyRequired"></a>

```java
public java.lang.Boolean|IResolvable getApiKeyRequired();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/apigatewayv2_route#api_key_required Apigatewayv2Route#api_key_required}.

---

##### `authorizationScopes`<sup>Optional</sup> <a name="authorizationScopes" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.authorizationScopes"></a>

```java
public java.util.List<java.lang.String> getAuthorizationScopes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/apigatewayv2_route#authorization_scopes Apigatewayv2Route#authorization_scopes}.

---

##### `authorizationType`<sup>Optional</sup> <a name="authorizationType" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.authorizationType"></a>

```java
public java.lang.String getAuthorizationType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/apigatewayv2_route#authorization_type Apigatewayv2Route#authorization_type}.

---

##### `authorizerId`<sup>Optional</sup> <a name="authorizerId" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.authorizerId"></a>

```java
public java.lang.String getAuthorizerId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/apigatewayv2_route#authorizer_id Apigatewayv2Route#authorizer_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/apigatewayv2_route#id Apigatewayv2Route#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `modelSelectionExpression`<sup>Optional</sup> <a name="modelSelectionExpression" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.modelSelectionExpression"></a>

```java
public java.lang.String getModelSelectionExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/apigatewayv2_route#model_selection_expression Apigatewayv2Route#model_selection_expression}.

---

##### `operationName`<sup>Optional</sup> <a name="operationName" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.operationName"></a>

```java
public java.lang.String getOperationName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/apigatewayv2_route#operation_name Apigatewayv2Route#operation_name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/apigatewayv2_route#region Apigatewayv2Route#region}

---

##### `requestModels`<sup>Optional</sup> <a name="requestModels" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.requestModels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRequestModels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/apigatewayv2_route#request_models Apigatewayv2Route#request_models}.

---

##### `requestParameter`<sup>Optional</sup> <a name="requestParameter" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.requestParameter"></a>

```java
public IResolvable|java.util.List<Apigatewayv2RouteRequestParameter> getRequestParameter();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameter">Apigatewayv2RouteRequestParameter</a>>

request_parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/apigatewayv2_route#request_parameter Apigatewayv2Route#request_parameter}

---

##### `routeResponseSelectionExpression`<sup>Optional</sup> <a name="routeResponseSelectionExpression" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.routeResponseSelectionExpression"></a>

```java
public java.lang.String getRouteResponseSelectionExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/apigatewayv2_route#route_response_selection_expression Apigatewayv2Route#route_response_selection_expression}.

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteConfig.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/apigatewayv2_route#target Apigatewayv2Route#target}.

---

### Apigatewayv2RouteRequestParameter <a name="Apigatewayv2RouteRequestParameter" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameter.Initializer"></a>

```java
import io.cdktn.providers.aws.apigatewayv2_route.Apigatewayv2RouteRequestParameter;

Apigatewayv2RouteRequestParameter.builder()
    .requestParameterKey(java.lang.String)
    .required(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameter.property.requestParameterKey">requestParameterKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/apigatewayv2_route#request_parameter_key Apigatewayv2Route#request_parameter_key}. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameter.property.required">required</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/apigatewayv2_route#required Apigatewayv2Route#required}. |

---

##### `requestParameterKey`<sup>Required</sup> <a name="requestParameterKey" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameter.property.requestParameterKey"></a>

```java
public java.lang.String getRequestParameterKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/apigatewayv2_route#request_parameter_key Apigatewayv2Route#request_parameter_key}.

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameter.property.required"></a>

```java
public java.lang.Boolean|IResolvable getRequired();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/apigatewayv2_route#required Apigatewayv2Route#required}.

---

## Classes <a name="Classes" id="Classes"></a>

### Apigatewayv2RouteRequestParameterList <a name="Apigatewayv2RouteRequestParameterList" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.Initializer"></a>

```java
import io.cdktn.providers.aws.apigatewayv2_route.Apigatewayv2RouteRequestParameterList;

new Apigatewayv2RouteRequestParameterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.get"></a>

```java
public Apigatewayv2RouteRequestParameterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameter">Apigatewayv2RouteRequestParameter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Apigatewayv2RouteRequestParameter> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameter">Apigatewayv2RouteRequestParameter</a>>

---


### Apigatewayv2RouteRequestParameterOutputReference <a name="Apigatewayv2RouteRequestParameterOutputReference" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.apigatewayv2_route.Apigatewayv2RouteRequestParameterOutputReference;

new Apigatewayv2RouteRequestParameterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.property.requestParameterKeyInput">requestParameterKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.property.requiredInput">requiredInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.property.requestParameterKey">requestParameterKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.property.required">required</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameter">Apigatewayv2RouteRequestParameter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `requestParameterKeyInput`<sup>Optional</sup> <a name="requestParameterKeyInput" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.property.requestParameterKeyInput"></a>

```java
public java.lang.String getRequestParameterKeyInput();
```

- *Type:* java.lang.String

---

##### `requiredInput`<sup>Optional</sup> <a name="requiredInput" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.property.requiredInput"></a>

```java
public java.lang.Boolean|IResolvable getRequiredInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `requestParameterKey`<sup>Required</sup> <a name="requestParameterKey" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.property.requestParameterKey"></a>

```java
public java.lang.String getRequestParameterKey();
```

- *Type:* java.lang.String

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.property.required"></a>

```java
public java.lang.Boolean|IResolvable getRequired();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameterOutputReference.property.internalValue"></a>

```java
public IResolvable|Apigatewayv2RouteRequestParameter getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.apigatewayv2Route.Apigatewayv2RouteRequestParameter">Apigatewayv2RouteRequestParameter</a>

---



