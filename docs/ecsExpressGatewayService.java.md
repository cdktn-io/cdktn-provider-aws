# `ecsExpressGatewayService` Submodule <a name="`ecsExpressGatewayService` Submodule" id="@cdktf/provider-aws.ecsExpressGatewayService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EcsExpressGatewayService <a name="EcsExpressGatewayService" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service aws_ecs_express_gateway_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_express_gateway_service.EcsExpressGatewayService;

EcsExpressGatewayService.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .executionRoleArn(java.lang.String)
    .infrastructureRoleArn(java.lang.String)
//  .cluster(java.lang.String)
//  .cpu(java.lang.String)
//  .healthCheckPath(java.lang.String)
//  .memory(java.lang.String)
//  .networkConfiguration(IResolvable|java.util.List<EcsExpressGatewayServiceNetworkConfiguration>)
//  .primaryContainer(IResolvable|java.util.List<EcsExpressGatewayServicePrimaryContainer>)
//  .region(java.lang.String)
//  .scalingTarget(IResolvable|java.util.List<EcsExpressGatewayServiceScalingTarget>)
//  .serviceName(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .taskRoleArn(java.lang.String)
//  .timeouts(EcsExpressGatewayServiceTimeouts)
//  .waitForSteadyState(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.executionRoleArn">executionRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#execution_role_arn EcsExpressGatewayService#execution_role_arn}. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.infrastructureRoleArn">infrastructureRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#infrastructure_role_arn EcsExpressGatewayService#infrastructure_role_arn}. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.cluster">cluster</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#cluster EcsExpressGatewayService#cluster}. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.cpu">cpu</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#cpu EcsExpressGatewayService#cpu}. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.healthCheckPath">healthCheckPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#health_check_path EcsExpressGatewayService#health_check_path}. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.memory">memory</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#memory EcsExpressGatewayService#memory}. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.networkConfiguration">networkConfiguration</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfiguration">EcsExpressGatewayServiceNetworkConfiguration</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#network_configuration EcsExpressGatewayService#network_configuration}. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.primaryContainer">primaryContainer</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer">EcsExpressGatewayServicePrimaryContainer</a>></code> | primary_container block. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.scalingTarget">scalingTarget</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTarget">EcsExpressGatewayServiceScalingTarget</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#scaling_target EcsExpressGatewayService#scaling_target}. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.serviceName">serviceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#service_name EcsExpressGatewayService#service_name}. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#tags EcsExpressGatewayService#tags}. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.taskRoleArn">taskRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#task_role_arn EcsExpressGatewayService#task_role_arn}. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeouts">EcsExpressGatewayServiceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.waitForSteadyState">waitForSteadyState</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#wait_for_steady_state EcsExpressGatewayService#wait_for_steady_state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.executionRoleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#execution_role_arn EcsExpressGatewayService#execution_role_arn}.

---

##### `infrastructureRoleArn`<sup>Required</sup> <a name="infrastructureRoleArn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.infrastructureRoleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#infrastructure_role_arn EcsExpressGatewayService#infrastructure_role_arn}.

---

##### `cluster`<sup>Optional</sup> <a name="cluster" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.cluster"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#cluster EcsExpressGatewayService#cluster}.

---

##### `cpu`<sup>Optional</sup> <a name="cpu" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.cpu"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#cpu EcsExpressGatewayService#cpu}.

---

##### `healthCheckPath`<sup>Optional</sup> <a name="healthCheckPath" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.healthCheckPath"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#health_check_path EcsExpressGatewayService#health_check_path}.

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.memory"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#memory EcsExpressGatewayService#memory}.

---

##### `networkConfiguration`<sup>Optional</sup> <a name="networkConfiguration" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.networkConfiguration"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfiguration">EcsExpressGatewayServiceNetworkConfiguration</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#network_configuration EcsExpressGatewayService#network_configuration}.

---

##### `primaryContainer`<sup>Optional</sup> <a name="primaryContainer" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.primaryContainer"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer">EcsExpressGatewayServicePrimaryContainer</a>>

primary_container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#primary_container EcsExpressGatewayService#primary_container}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#region EcsExpressGatewayService#region}

---

##### `scalingTarget`<sup>Optional</sup> <a name="scalingTarget" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.scalingTarget"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTarget">EcsExpressGatewayServiceScalingTarget</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#scaling_target EcsExpressGatewayService#scaling_target}.

---

##### `serviceName`<sup>Optional</sup> <a name="serviceName" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.serviceName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#service_name EcsExpressGatewayService#service_name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#tags EcsExpressGatewayService#tags}.

---

##### `taskRoleArn`<sup>Optional</sup> <a name="taskRoleArn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.taskRoleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#task_role_arn EcsExpressGatewayService#task_role_arn}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeouts">EcsExpressGatewayServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#timeouts EcsExpressGatewayService#timeouts}

---

##### `waitForSteadyState`<sup>Optional</sup> <a name="waitForSteadyState" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.waitForSteadyState"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#wait_for_steady_state EcsExpressGatewayService#wait_for_steady_state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.putNetworkConfiguration">putNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.putPrimaryContainer">putPrimaryContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.putScalingTarget">putScalingTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.resetCluster">resetCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.resetCpu">resetCpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.resetHealthCheckPath">resetHealthCheckPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.resetMemory">resetMemory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.resetNetworkConfiguration">resetNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.resetPrimaryContainer">resetPrimaryContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.resetScalingTarget">resetScalingTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.resetServiceName">resetServiceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.resetTaskRoleArn">resetTaskRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.resetWaitForSteadyState">resetWaitForSteadyState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putNetworkConfiguration` <a name="putNetworkConfiguration" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.putNetworkConfiguration"></a>

```java
public void putNetworkConfiguration(IResolvable|java.util.List<EcsExpressGatewayServiceNetworkConfiguration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.putNetworkConfiguration.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfiguration">EcsExpressGatewayServiceNetworkConfiguration</a>>

---

##### `putPrimaryContainer` <a name="putPrimaryContainer" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.putPrimaryContainer"></a>

```java
public void putPrimaryContainer(IResolvable|java.util.List<EcsExpressGatewayServicePrimaryContainer> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.putPrimaryContainer.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer">EcsExpressGatewayServicePrimaryContainer</a>>

---

##### `putScalingTarget` <a name="putScalingTarget" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.putScalingTarget"></a>

```java
public void putScalingTarget(IResolvable|java.util.List<EcsExpressGatewayServiceScalingTarget> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.putScalingTarget.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTarget">EcsExpressGatewayServiceScalingTarget</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.putTimeouts"></a>

```java
public void putTimeouts(EcsExpressGatewayServiceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeouts">EcsExpressGatewayServiceTimeouts</a>

---

##### `resetCluster` <a name="resetCluster" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.resetCluster"></a>

```java
public void resetCluster()
```

##### `resetCpu` <a name="resetCpu" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.resetCpu"></a>

```java
public void resetCpu()
```

##### `resetHealthCheckPath` <a name="resetHealthCheckPath" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.resetHealthCheckPath"></a>

```java
public void resetHealthCheckPath()
```

##### `resetMemory` <a name="resetMemory" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.resetMemory"></a>

```java
public void resetMemory()
```

##### `resetNetworkConfiguration` <a name="resetNetworkConfiguration" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.resetNetworkConfiguration"></a>

```java
public void resetNetworkConfiguration()
```

##### `resetPrimaryContainer` <a name="resetPrimaryContainer" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.resetPrimaryContainer"></a>

```java
public void resetPrimaryContainer()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetScalingTarget` <a name="resetScalingTarget" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.resetScalingTarget"></a>

```java
public void resetScalingTarget()
```

##### `resetServiceName` <a name="resetServiceName" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.resetServiceName"></a>

```java
public void resetServiceName()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.resetTags"></a>

```java
public void resetTags()
```

##### `resetTaskRoleArn` <a name="resetTaskRoleArn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.resetTaskRoleArn"></a>

```java
public void resetTaskRoleArn()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetWaitForSteadyState` <a name="resetWaitForSteadyState" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.resetWaitForSteadyState"></a>

```java
public void resetWaitForSteadyState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a EcsExpressGatewayService resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_express_gateway_service.EcsExpressGatewayService;

EcsExpressGatewayService.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_express_gateway_service.EcsExpressGatewayService;

EcsExpressGatewayService.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_express_gateway_service.EcsExpressGatewayService;

EcsExpressGatewayService.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_express_gateway_service.EcsExpressGatewayService;

EcsExpressGatewayService.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),EcsExpressGatewayService.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a EcsExpressGatewayService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the EcsExpressGatewayService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing EcsExpressGatewayService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the EcsExpressGatewayService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.currentDeployment">currentDeployment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.ingressPaths">ingressPaths</a></code> | <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsList">EcsExpressGatewayServiceIngressPathsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationList">EcsExpressGatewayServiceNetworkConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.primaryContainer">primaryContainer</a></code> | <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerList">EcsExpressGatewayServicePrimaryContainerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.scalingTarget">scalingTarget</a></code> | <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetList">EcsExpressGatewayServiceScalingTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.serviceArn">serviceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.serviceRevisionArn">serviceRevisionArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.tagsAll">tagsAll</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference">EcsExpressGatewayServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.clusterInput">clusterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.cpuInput">cpuInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.executionRoleArnInput">executionRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.healthCheckPathInput">healthCheckPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.infrastructureRoleArnInput">infrastructureRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.memoryInput">memoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.networkConfigurationInput">networkConfigurationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfiguration">EcsExpressGatewayServiceNetworkConfiguration</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.primaryContainerInput">primaryContainerInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer">EcsExpressGatewayServicePrimaryContainer</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.scalingTargetInput">scalingTargetInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTarget">EcsExpressGatewayServiceScalingTarget</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.serviceNameInput">serviceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.taskRoleArnInput">taskRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeouts">EcsExpressGatewayServiceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.waitForSteadyStateInput">waitForSteadyStateInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.cluster">cluster</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.cpu">cpu</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.executionRoleArn">executionRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.healthCheckPath">healthCheckPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.infrastructureRoleArn">infrastructureRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.memory">memory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.taskRoleArn">taskRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.waitForSteadyState">waitForSteadyState</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `currentDeployment`<sup>Required</sup> <a name="currentDeployment" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.currentDeployment"></a>

```java
public java.lang.String getCurrentDeployment();
```

- *Type:* java.lang.String

---

##### `ingressPaths`<sup>Required</sup> <a name="ingressPaths" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.ingressPaths"></a>

```java
public EcsExpressGatewayServiceIngressPathsList getIngressPaths();
```

- *Type:* <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsList">EcsExpressGatewayServiceIngressPathsList</a>

---

##### `networkConfiguration`<sup>Required</sup> <a name="networkConfiguration" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.networkConfiguration"></a>

```java
public EcsExpressGatewayServiceNetworkConfigurationList getNetworkConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationList">EcsExpressGatewayServiceNetworkConfigurationList</a>

---

##### `primaryContainer`<sup>Required</sup> <a name="primaryContainer" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.primaryContainer"></a>

```java
public EcsExpressGatewayServicePrimaryContainerList getPrimaryContainer();
```

- *Type:* <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerList">EcsExpressGatewayServicePrimaryContainerList</a>

---

##### `scalingTarget`<sup>Required</sup> <a name="scalingTarget" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.scalingTarget"></a>

```java
public EcsExpressGatewayServiceScalingTargetList getScalingTarget();
```

- *Type:* <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetList">EcsExpressGatewayServiceScalingTargetList</a>

---

##### `serviceArn`<sup>Required</sup> <a name="serviceArn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.serviceArn"></a>

```java
public java.lang.String getServiceArn();
```

- *Type:* java.lang.String

---

##### `serviceRevisionArn`<sup>Required</sup> <a name="serviceRevisionArn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.serviceRevisionArn"></a>

```java
public java.lang.String getServiceRevisionArn();
```

- *Type:* java.lang.String

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.tagsAll"></a>

```java
public StringMap getTagsAll();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.timeouts"></a>

```java
public EcsExpressGatewayServiceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference">EcsExpressGatewayServiceTimeoutsOutputReference</a>

---

##### `clusterInput`<sup>Optional</sup> <a name="clusterInput" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.clusterInput"></a>

```java
public java.lang.String getClusterInput();
```

- *Type:* java.lang.String

---

##### `cpuInput`<sup>Optional</sup> <a name="cpuInput" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.cpuInput"></a>

```java
public java.lang.String getCpuInput();
```

- *Type:* java.lang.String

---

##### `executionRoleArnInput`<sup>Optional</sup> <a name="executionRoleArnInput" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.executionRoleArnInput"></a>

```java
public java.lang.String getExecutionRoleArnInput();
```

- *Type:* java.lang.String

---

##### `healthCheckPathInput`<sup>Optional</sup> <a name="healthCheckPathInput" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.healthCheckPathInput"></a>

```java
public java.lang.String getHealthCheckPathInput();
```

- *Type:* java.lang.String

---

##### `infrastructureRoleArnInput`<sup>Optional</sup> <a name="infrastructureRoleArnInput" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.infrastructureRoleArnInput"></a>

```java
public java.lang.String getInfrastructureRoleArnInput();
```

- *Type:* java.lang.String

---

##### `memoryInput`<sup>Optional</sup> <a name="memoryInput" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.memoryInput"></a>

```java
public java.lang.String getMemoryInput();
```

- *Type:* java.lang.String

---

##### `networkConfigurationInput`<sup>Optional</sup> <a name="networkConfigurationInput" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.networkConfigurationInput"></a>

```java
public IResolvable|java.util.List<EcsExpressGatewayServiceNetworkConfiguration> getNetworkConfigurationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfiguration">EcsExpressGatewayServiceNetworkConfiguration</a>>

---

##### `primaryContainerInput`<sup>Optional</sup> <a name="primaryContainerInput" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.primaryContainerInput"></a>

```java
public IResolvable|java.util.List<EcsExpressGatewayServicePrimaryContainer> getPrimaryContainerInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer">EcsExpressGatewayServicePrimaryContainer</a>>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `scalingTargetInput`<sup>Optional</sup> <a name="scalingTargetInput" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.scalingTargetInput"></a>

```java
public IResolvable|java.util.List<EcsExpressGatewayServiceScalingTarget> getScalingTargetInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTarget">EcsExpressGatewayServiceScalingTarget</a>>

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.serviceNameInput"></a>

```java
public java.lang.String getServiceNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `taskRoleArnInput`<sup>Optional</sup> <a name="taskRoleArnInput" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.taskRoleArnInput"></a>

```java
public java.lang.String getTaskRoleArnInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.timeoutsInput"></a>

```java
public IResolvable|EcsExpressGatewayServiceTimeouts getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeouts">EcsExpressGatewayServiceTimeouts</a>

---

##### `waitForSteadyStateInput`<sup>Optional</sup> <a name="waitForSteadyStateInput" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.waitForSteadyStateInput"></a>

```java
public java.lang.Boolean|IResolvable getWaitForSteadyStateInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.cluster"></a>

```java
public java.lang.String getCluster();
```

- *Type:* java.lang.String

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.cpu"></a>

```java
public java.lang.String getCpu();
```

- *Type:* java.lang.String

---

##### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.executionRoleArn"></a>

```java
public java.lang.String getExecutionRoleArn();
```

- *Type:* java.lang.String

---

##### `healthCheckPath`<sup>Required</sup> <a name="healthCheckPath" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.healthCheckPath"></a>

```java
public java.lang.String getHealthCheckPath();
```

- *Type:* java.lang.String

---

##### `infrastructureRoleArn`<sup>Required</sup> <a name="infrastructureRoleArn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.infrastructureRoleArn"></a>

```java
public java.lang.String getInfrastructureRoleArn();
```

- *Type:* java.lang.String

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.memory"></a>

```java
public java.lang.String getMemory();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `taskRoleArn`<sup>Required</sup> <a name="taskRoleArn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.taskRoleArn"></a>

```java
public java.lang.String getTaskRoleArn();
```

- *Type:* java.lang.String

---

##### `waitForSteadyState`<sup>Required</sup> <a name="waitForSteadyState" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.waitForSteadyState"></a>

```java
public java.lang.Boolean|IResolvable getWaitForSteadyState();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayService.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EcsExpressGatewayServiceConfig <a name="EcsExpressGatewayServiceConfig" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_express_gateway_service.EcsExpressGatewayServiceConfig;

EcsExpressGatewayServiceConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .executionRoleArn(java.lang.String)
    .infrastructureRoleArn(java.lang.String)
//  .cluster(java.lang.String)
//  .cpu(java.lang.String)
//  .healthCheckPath(java.lang.String)
//  .memory(java.lang.String)
//  .networkConfiguration(IResolvable|java.util.List<EcsExpressGatewayServiceNetworkConfiguration>)
//  .primaryContainer(IResolvable|java.util.List<EcsExpressGatewayServicePrimaryContainer>)
//  .region(java.lang.String)
//  .scalingTarget(IResolvable|java.util.List<EcsExpressGatewayServiceScalingTarget>)
//  .serviceName(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .taskRoleArn(java.lang.String)
//  .timeouts(EcsExpressGatewayServiceTimeouts)
//  .waitForSteadyState(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.executionRoleArn">executionRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#execution_role_arn EcsExpressGatewayService#execution_role_arn}. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.infrastructureRoleArn">infrastructureRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#infrastructure_role_arn EcsExpressGatewayService#infrastructure_role_arn}. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.cluster">cluster</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#cluster EcsExpressGatewayService#cluster}. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.cpu">cpu</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#cpu EcsExpressGatewayService#cpu}. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.healthCheckPath">healthCheckPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#health_check_path EcsExpressGatewayService#health_check_path}. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.memory">memory</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#memory EcsExpressGatewayService#memory}. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.networkConfiguration">networkConfiguration</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfiguration">EcsExpressGatewayServiceNetworkConfiguration</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#network_configuration EcsExpressGatewayService#network_configuration}. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.primaryContainer">primaryContainer</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer">EcsExpressGatewayServicePrimaryContainer</a>></code> | primary_container block. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.scalingTarget">scalingTarget</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTarget">EcsExpressGatewayServiceScalingTarget</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#scaling_target EcsExpressGatewayService#scaling_target}. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#service_name EcsExpressGatewayService#service_name}. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#tags EcsExpressGatewayService#tags}. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.taskRoleArn">taskRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#task_role_arn EcsExpressGatewayService#task_role_arn}. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeouts">EcsExpressGatewayServiceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.waitForSteadyState">waitForSteadyState</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#wait_for_steady_state EcsExpressGatewayService#wait_for_steady_state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.executionRoleArn"></a>

```java
public java.lang.String getExecutionRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#execution_role_arn EcsExpressGatewayService#execution_role_arn}.

---

##### `infrastructureRoleArn`<sup>Required</sup> <a name="infrastructureRoleArn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.infrastructureRoleArn"></a>

```java
public java.lang.String getInfrastructureRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#infrastructure_role_arn EcsExpressGatewayService#infrastructure_role_arn}.

---

##### `cluster`<sup>Optional</sup> <a name="cluster" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.cluster"></a>

```java
public java.lang.String getCluster();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#cluster EcsExpressGatewayService#cluster}.

---

##### `cpu`<sup>Optional</sup> <a name="cpu" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.cpu"></a>

```java
public java.lang.String getCpu();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#cpu EcsExpressGatewayService#cpu}.

---

##### `healthCheckPath`<sup>Optional</sup> <a name="healthCheckPath" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.healthCheckPath"></a>

```java
public java.lang.String getHealthCheckPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#health_check_path EcsExpressGatewayService#health_check_path}.

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.memory"></a>

```java
public java.lang.String getMemory();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#memory EcsExpressGatewayService#memory}.

---

##### `networkConfiguration`<sup>Optional</sup> <a name="networkConfiguration" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.networkConfiguration"></a>

```java
public IResolvable|java.util.List<EcsExpressGatewayServiceNetworkConfiguration> getNetworkConfiguration();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfiguration">EcsExpressGatewayServiceNetworkConfiguration</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#network_configuration EcsExpressGatewayService#network_configuration}.

---

##### `primaryContainer`<sup>Optional</sup> <a name="primaryContainer" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.primaryContainer"></a>

```java
public IResolvable|java.util.List<EcsExpressGatewayServicePrimaryContainer> getPrimaryContainer();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer">EcsExpressGatewayServicePrimaryContainer</a>>

primary_container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#primary_container EcsExpressGatewayService#primary_container}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#region EcsExpressGatewayService#region}

---

##### `scalingTarget`<sup>Optional</sup> <a name="scalingTarget" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.scalingTarget"></a>

```java
public IResolvable|java.util.List<EcsExpressGatewayServiceScalingTarget> getScalingTarget();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTarget">EcsExpressGatewayServiceScalingTarget</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#scaling_target EcsExpressGatewayService#scaling_target}.

---

##### `serviceName`<sup>Optional</sup> <a name="serviceName" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#service_name EcsExpressGatewayService#service_name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#tags EcsExpressGatewayService#tags}.

---

##### `taskRoleArn`<sup>Optional</sup> <a name="taskRoleArn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.taskRoleArn"></a>

```java
public java.lang.String getTaskRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#task_role_arn EcsExpressGatewayService#task_role_arn}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.timeouts"></a>

```java
public EcsExpressGatewayServiceTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeouts">EcsExpressGatewayServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#timeouts EcsExpressGatewayService#timeouts}

---

##### `waitForSteadyState`<sup>Optional</sup> <a name="waitForSteadyState" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.waitForSteadyState"></a>

```java
public java.lang.Boolean|IResolvable getWaitForSteadyState();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#wait_for_steady_state EcsExpressGatewayService#wait_for_steady_state}.

---

### EcsExpressGatewayServiceIngressPaths <a name="EcsExpressGatewayServiceIngressPaths" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPaths"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPaths.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_express_gateway_service.EcsExpressGatewayServiceIngressPaths;

EcsExpressGatewayServiceIngressPaths.builder()
    .build();
```


### EcsExpressGatewayServiceNetworkConfiguration <a name="EcsExpressGatewayServiceNetworkConfiguration" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_express_gateway_service.EcsExpressGatewayServiceNetworkConfiguration;

EcsExpressGatewayServiceNetworkConfiguration.builder()
//  .securityGroups(java.util.List<java.lang.String>)
//  .subnets(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfiguration.property.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#security_groups EcsExpressGatewayService#security_groups}. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfiguration.property.subnets">subnets</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#subnets EcsExpressGatewayService#subnets}. |

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfiguration.property.securityGroups"></a>

```java
public java.util.List<java.lang.String> getSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#security_groups EcsExpressGatewayService#security_groups}.

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfiguration.property.subnets"></a>

```java
public java.util.List<java.lang.String> getSubnets();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#subnets EcsExpressGatewayService#subnets}.

---

### EcsExpressGatewayServicePrimaryContainer <a name="EcsExpressGatewayServicePrimaryContainer" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_express_gateway_service.EcsExpressGatewayServicePrimaryContainer;

EcsExpressGatewayServicePrimaryContainer.builder()
    .image(java.lang.String)
//  .awsLogsConfiguration(IResolvable|java.util.List<EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration>)
//  .command(java.util.List<java.lang.String>)
//  .containerPort(java.lang.Number)
//  .environment(IResolvable|java.util.List<EcsExpressGatewayServicePrimaryContainerEnvironment>)
//  .repositoryCredentials(IResolvable|java.util.List<EcsExpressGatewayServicePrimaryContainerRepositoryCredentials>)
//  .secret(IResolvable|java.util.List<EcsExpressGatewayServicePrimaryContainerSecret>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer.property.image">image</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#image EcsExpressGatewayService#image}. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer.property.awsLogsConfiguration">awsLogsConfiguration</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration">EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#aws_logs_configuration EcsExpressGatewayService#aws_logs_configuration}. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer.property.command">command</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#command EcsExpressGatewayService#command}. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer.property.containerPort">containerPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#container_port EcsExpressGatewayService#container_port}. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer.property.environment">environment</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironment">EcsExpressGatewayServicePrimaryContainerEnvironment</a>></code> | environment block. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer.property.repositoryCredentials">repositoryCredentials</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentials">EcsExpressGatewayServicePrimaryContainerRepositoryCredentials</a>></code> | repository_credentials block. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer.property.secret">secret</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecret">EcsExpressGatewayServicePrimaryContainerSecret</a>></code> | secret block. |

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer.property.image"></a>

```java
public java.lang.String getImage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#image EcsExpressGatewayService#image}.

---

##### `awsLogsConfiguration`<sup>Optional</sup> <a name="awsLogsConfiguration" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer.property.awsLogsConfiguration"></a>

```java
public IResolvable|java.util.List<EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration> getAwsLogsConfiguration();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration">EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#aws_logs_configuration EcsExpressGatewayService#aws_logs_configuration}.

---

##### `command`<sup>Optional</sup> <a name="command" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer.property.command"></a>

```java
public java.util.List<java.lang.String> getCommand();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#command EcsExpressGatewayService#command}.

---

##### `containerPort`<sup>Optional</sup> <a name="containerPort" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer.property.containerPort"></a>

```java
public java.lang.Number getContainerPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#container_port EcsExpressGatewayService#container_port}.

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer.property.environment"></a>

```java
public IResolvable|java.util.List<EcsExpressGatewayServicePrimaryContainerEnvironment> getEnvironment();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironment">EcsExpressGatewayServicePrimaryContainerEnvironment</a>>

environment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#environment EcsExpressGatewayService#environment}

---

##### `repositoryCredentials`<sup>Optional</sup> <a name="repositoryCredentials" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer.property.repositoryCredentials"></a>

```java
public IResolvable|java.util.List<EcsExpressGatewayServicePrimaryContainerRepositoryCredentials> getRepositoryCredentials();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentials">EcsExpressGatewayServicePrimaryContainerRepositoryCredentials</a>>

repository_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#repository_credentials EcsExpressGatewayService#repository_credentials}

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer.property.secret"></a>

```java
public IResolvable|java.util.List<EcsExpressGatewayServicePrimaryContainerSecret> getSecret();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecret">EcsExpressGatewayServicePrimaryContainerSecret</a>>

secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#secret EcsExpressGatewayService#secret}

---

### EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration <a name="EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_express_gateway_service.EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration;

EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration.builder()
//  .logGroup(java.lang.String)
//  .logStreamPrefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration.property.logGroup">logGroup</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#log_group EcsExpressGatewayService#log_group}. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration.property.logStreamPrefix">logStreamPrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#log_stream_prefix EcsExpressGatewayService#log_stream_prefix}. |

---

##### `logGroup`<sup>Optional</sup> <a name="logGroup" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration.property.logGroup"></a>

```java
public java.lang.String getLogGroup();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#log_group EcsExpressGatewayService#log_group}.

---

##### `logStreamPrefix`<sup>Optional</sup> <a name="logStreamPrefix" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration.property.logStreamPrefix"></a>

```java
public java.lang.String getLogStreamPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#log_stream_prefix EcsExpressGatewayService#log_stream_prefix}.

---

### EcsExpressGatewayServicePrimaryContainerEnvironment <a name="EcsExpressGatewayServicePrimaryContainerEnvironment" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironment.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_express_gateway_service.EcsExpressGatewayServicePrimaryContainerEnvironment;

EcsExpressGatewayServicePrimaryContainerEnvironment.builder()
    .name(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironment.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#name EcsExpressGatewayService#name}. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironment.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#value EcsExpressGatewayService#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironment.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#name EcsExpressGatewayService#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironment.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#value EcsExpressGatewayService#value}.

---

### EcsExpressGatewayServicePrimaryContainerRepositoryCredentials <a name="EcsExpressGatewayServicePrimaryContainerRepositoryCredentials" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentials.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_express_gateway_service.EcsExpressGatewayServicePrimaryContainerRepositoryCredentials;

EcsExpressGatewayServicePrimaryContainerRepositoryCredentials.builder()
    .credentialsParameter(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentials.property.credentialsParameter">credentialsParameter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#credentials_parameter EcsExpressGatewayService#credentials_parameter}. |

---

##### `credentialsParameter`<sup>Required</sup> <a name="credentialsParameter" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentials.property.credentialsParameter"></a>

```java
public java.lang.String getCredentialsParameter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#credentials_parameter EcsExpressGatewayService#credentials_parameter}.

---

### EcsExpressGatewayServicePrimaryContainerSecret <a name="EcsExpressGatewayServicePrimaryContainerSecret" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecret.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_express_gateway_service.EcsExpressGatewayServicePrimaryContainerSecret;

EcsExpressGatewayServicePrimaryContainerSecret.builder()
    .name(java.lang.String)
    .valueFrom(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecret.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#name EcsExpressGatewayService#name}. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecret.property.valueFrom">valueFrom</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#value_from EcsExpressGatewayService#value_from}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecret.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#name EcsExpressGatewayService#name}.

---

##### `valueFrom`<sup>Required</sup> <a name="valueFrom" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecret.property.valueFrom"></a>

```java
public java.lang.String getValueFrom();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#value_from EcsExpressGatewayService#value_from}.

---

### EcsExpressGatewayServiceScalingTarget <a name="EcsExpressGatewayServiceScalingTarget" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTarget.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_express_gateway_service.EcsExpressGatewayServiceScalingTarget;

EcsExpressGatewayServiceScalingTarget.builder()
//  .autoScalingMetric(java.lang.String)
//  .autoScalingTargetValue(java.lang.Number)
//  .maxTaskCount(java.lang.Number)
//  .minTaskCount(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTarget.property.autoScalingMetric">autoScalingMetric</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#auto_scaling_metric EcsExpressGatewayService#auto_scaling_metric}. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTarget.property.autoScalingTargetValue">autoScalingTargetValue</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#auto_scaling_target_value EcsExpressGatewayService#auto_scaling_target_value}. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTarget.property.maxTaskCount">maxTaskCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#max_task_count EcsExpressGatewayService#max_task_count}. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTarget.property.minTaskCount">minTaskCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#min_task_count EcsExpressGatewayService#min_task_count}. |

---

##### `autoScalingMetric`<sup>Optional</sup> <a name="autoScalingMetric" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTarget.property.autoScalingMetric"></a>

```java
public java.lang.String getAutoScalingMetric();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#auto_scaling_metric EcsExpressGatewayService#auto_scaling_metric}.

---

##### `autoScalingTargetValue`<sup>Optional</sup> <a name="autoScalingTargetValue" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTarget.property.autoScalingTargetValue"></a>

```java
public java.lang.Number getAutoScalingTargetValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#auto_scaling_target_value EcsExpressGatewayService#auto_scaling_target_value}.

---

##### `maxTaskCount`<sup>Optional</sup> <a name="maxTaskCount" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTarget.property.maxTaskCount"></a>

```java
public java.lang.Number getMaxTaskCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#max_task_count EcsExpressGatewayService#max_task_count}.

---

##### `minTaskCount`<sup>Optional</sup> <a name="minTaskCount" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTarget.property.minTaskCount"></a>

```java
public java.lang.Number getMinTaskCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#min_task_count EcsExpressGatewayService#min_task_count}.

---

### EcsExpressGatewayServiceTimeouts <a name="EcsExpressGatewayServiceTimeouts" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_express_gateway_service.EcsExpressGatewayServiceTimeouts;

EcsExpressGatewayServiceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#create EcsExpressGatewayService#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#delete EcsExpressGatewayService#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.25.0/docs/resources/ecs_express_gateway_service#update EcsExpressGatewayService#update}

---

## Classes <a name="Classes" id="Classes"></a>

### EcsExpressGatewayServiceIngressPathsList <a name="EcsExpressGatewayServiceIngressPathsList" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_express_gateway_service.EcsExpressGatewayServiceIngressPathsList;

new EcsExpressGatewayServiceIngressPathsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsList.get"></a>

```java
public EcsExpressGatewayServiceIngressPathsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### EcsExpressGatewayServiceIngressPathsOutputReference <a name="EcsExpressGatewayServiceIngressPathsOutputReference" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_express_gateway_service.EcsExpressGatewayServiceIngressPathsOutputReference;

new EcsExpressGatewayServiceIngressPathsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.property.accessType">accessType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPaths">EcsExpressGatewayServiceIngressPaths</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessType`<sup>Required</sup> <a name="accessType" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.property.accessType"></a>

```java
public java.lang.String getAccessType();
```

- *Type:* java.lang.String

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPathsOutputReference.property.internalValue"></a>

```java
public EcsExpressGatewayServiceIngressPaths getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceIngressPaths">EcsExpressGatewayServiceIngressPaths</a>

---


### EcsExpressGatewayServiceNetworkConfigurationList <a name="EcsExpressGatewayServiceNetworkConfigurationList" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_express_gateway_service.EcsExpressGatewayServiceNetworkConfigurationList;

new EcsExpressGatewayServiceNetworkConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationList.get"></a>

```java
public EcsExpressGatewayServiceNetworkConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfiguration">EcsExpressGatewayServiceNetworkConfiguration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationList.property.internalValue"></a>

```java
public IResolvable|java.util.List<EcsExpressGatewayServiceNetworkConfiguration> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfiguration">EcsExpressGatewayServiceNetworkConfiguration</a>>

---


### EcsExpressGatewayServiceNetworkConfigurationOutputReference <a name="EcsExpressGatewayServiceNetworkConfigurationOutputReference" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_express_gateway_service.EcsExpressGatewayServiceNetworkConfigurationOutputReference;

new EcsExpressGatewayServiceNetworkConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.resetSecurityGroups">resetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.resetSubnets">resetSubnets</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecurityGroups` <a name="resetSecurityGroups" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.resetSecurityGroups"></a>

```java
public void resetSecurityGroups()
```

##### `resetSubnets` <a name="resetSubnets" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.resetSubnets"></a>

```java
public void resetSubnets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.property.securityGroupsInput">securityGroupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.property.subnetsInput">subnetsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.property.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.property.subnets">subnets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfiguration">EcsExpressGatewayServiceNetworkConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `securityGroupsInput`<sup>Optional</sup> <a name="securityGroupsInput" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.property.securityGroupsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetsInput`<sup>Optional</sup> <a name="subnetsInput" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.property.subnetsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.property.securityGroups"></a>

```java
public java.util.List<java.lang.String> getSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.property.subnets"></a>

```java
public java.util.List<java.lang.String> getSubnets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|EcsExpressGatewayServiceNetworkConfiguration getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfiguration">EcsExpressGatewayServiceNetworkConfiguration</a>

---


### EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList <a name="EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_express_gateway_service.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList;

new EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList.get"></a>

```java
public EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration">EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList.property.internalValue"></a>

```java
public IResolvable|java.util.List<EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration">EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration</a>>

---


### EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference <a name="EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_express_gateway_service.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference;

new EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.resetLogGroup">resetLogGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.resetLogStreamPrefix">resetLogStreamPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLogGroup` <a name="resetLogGroup" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.resetLogGroup"></a>

```java
public void resetLogGroup()
```

##### `resetLogStreamPrefix` <a name="resetLogStreamPrefix" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.resetLogStreamPrefix"></a>

```java
public void resetLogStreamPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.property.logGroupInput">logGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.property.logStreamPrefixInput">logStreamPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.property.logGroup">logGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.property.logStreamPrefix">logStreamPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration">EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `logGroupInput`<sup>Optional</sup> <a name="logGroupInput" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.property.logGroupInput"></a>

```java
public java.lang.String getLogGroupInput();
```

- *Type:* java.lang.String

---

##### `logStreamPrefixInput`<sup>Optional</sup> <a name="logStreamPrefixInput" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.property.logStreamPrefixInput"></a>

```java
public java.lang.String getLogStreamPrefixInput();
```

- *Type:* java.lang.String

---

##### `logGroup`<sup>Required</sup> <a name="logGroup" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.property.logGroup"></a>

```java
public java.lang.String getLogGroup();
```

- *Type:* java.lang.String

---

##### `logStreamPrefix`<sup>Required</sup> <a name="logStreamPrefix" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.property.logStreamPrefix"></a>

```java
public java.lang.String getLogStreamPrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration">EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration</a>

---


### EcsExpressGatewayServicePrimaryContainerEnvironmentList <a name="EcsExpressGatewayServicePrimaryContainerEnvironmentList" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_express_gateway_service.EcsExpressGatewayServicePrimaryContainerEnvironmentList;

new EcsExpressGatewayServicePrimaryContainerEnvironmentList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.get"></a>

```java
public EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironment">EcsExpressGatewayServicePrimaryContainerEnvironment</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.property.internalValue"></a>

```java
public IResolvable|java.util.List<EcsExpressGatewayServicePrimaryContainerEnvironment> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironment">EcsExpressGatewayServicePrimaryContainerEnvironment</a>>

---


### EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference <a name="EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_express_gateway_service.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference;

new EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironment">EcsExpressGatewayServicePrimaryContainerEnvironment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.property.internalValue"></a>

```java
public IResolvable|EcsExpressGatewayServicePrimaryContainerEnvironment getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironment">EcsExpressGatewayServicePrimaryContainerEnvironment</a>

---


### EcsExpressGatewayServicePrimaryContainerList <a name="EcsExpressGatewayServicePrimaryContainerList" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_express_gateway_service.EcsExpressGatewayServicePrimaryContainerList;

new EcsExpressGatewayServicePrimaryContainerList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerList.get"></a>

```java
public EcsExpressGatewayServicePrimaryContainerOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer">EcsExpressGatewayServicePrimaryContainer</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerList.property.internalValue"></a>

```java
public IResolvable|java.util.List<EcsExpressGatewayServicePrimaryContainer> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer">EcsExpressGatewayServicePrimaryContainer</a>>

---


### EcsExpressGatewayServicePrimaryContainerOutputReference <a name="EcsExpressGatewayServicePrimaryContainerOutputReference" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_express_gateway_service.EcsExpressGatewayServicePrimaryContainerOutputReference;

new EcsExpressGatewayServicePrimaryContainerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.putAwsLogsConfiguration">putAwsLogsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.putEnvironment">putEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.putRepositoryCredentials">putRepositoryCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.putSecret">putSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.resetAwsLogsConfiguration">resetAwsLogsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.resetCommand">resetCommand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.resetContainerPort">resetContainerPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.resetEnvironment">resetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.resetRepositoryCredentials">resetRepositoryCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.resetSecret">resetSecret</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAwsLogsConfiguration` <a name="putAwsLogsConfiguration" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.putAwsLogsConfiguration"></a>

```java
public void putAwsLogsConfiguration(IResolvable|java.util.List<EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.putAwsLogsConfiguration.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration">EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration</a>>

---

##### `putEnvironment` <a name="putEnvironment" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.putEnvironment"></a>

```java
public void putEnvironment(IResolvable|java.util.List<EcsExpressGatewayServicePrimaryContainerEnvironment> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.putEnvironment.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironment">EcsExpressGatewayServicePrimaryContainerEnvironment</a>>

---

##### `putRepositoryCredentials` <a name="putRepositoryCredentials" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.putRepositoryCredentials"></a>

```java
public void putRepositoryCredentials(IResolvable|java.util.List<EcsExpressGatewayServicePrimaryContainerRepositoryCredentials> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.putRepositoryCredentials.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentials">EcsExpressGatewayServicePrimaryContainerRepositoryCredentials</a>>

---

##### `putSecret` <a name="putSecret" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.putSecret"></a>

```java
public void putSecret(IResolvable|java.util.List<EcsExpressGatewayServicePrimaryContainerSecret> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.putSecret.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecret">EcsExpressGatewayServicePrimaryContainerSecret</a>>

---

##### `resetAwsLogsConfiguration` <a name="resetAwsLogsConfiguration" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.resetAwsLogsConfiguration"></a>

```java
public void resetAwsLogsConfiguration()
```

##### `resetCommand` <a name="resetCommand" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.resetCommand"></a>

```java
public void resetCommand()
```

##### `resetContainerPort` <a name="resetContainerPort" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.resetContainerPort"></a>

```java
public void resetContainerPort()
```

##### `resetEnvironment` <a name="resetEnvironment" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.resetEnvironment"></a>

```java
public void resetEnvironment()
```

##### `resetRepositoryCredentials` <a name="resetRepositoryCredentials" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.resetRepositoryCredentials"></a>

```java
public void resetRepositoryCredentials()
```

##### `resetSecret` <a name="resetSecret" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.resetSecret"></a>

```java
public void resetSecret()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.awsLogsConfiguration">awsLogsConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList">EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.environment">environment</a></code> | <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList">EcsExpressGatewayServicePrimaryContainerEnvironmentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.repositoryCredentials">repositoryCredentials</a></code> | <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList">EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.secret">secret</a></code> | <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretList">EcsExpressGatewayServicePrimaryContainerSecretList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.awsLogsConfigurationInput">awsLogsConfigurationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration">EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.commandInput">commandInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.containerPortInput">containerPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.environmentInput">environmentInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironment">EcsExpressGatewayServicePrimaryContainerEnvironment</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.imageInput">imageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.repositoryCredentialsInput">repositoryCredentialsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentials">EcsExpressGatewayServicePrimaryContainerRepositoryCredentials</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.secretInput">secretInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecret">EcsExpressGatewayServicePrimaryContainerSecret</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.command">command</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.containerPort">containerPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.image">image</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer">EcsExpressGatewayServicePrimaryContainer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `awsLogsConfiguration`<sup>Required</sup> <a name="awsLogsConfiguration" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.awsLogsConfiguration"></a>

```java
public EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList getAwsLogsConfiguration();
```

- *Type:* <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList">EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationList</a>

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.environment"></a>

```java
public EcsExpressGatewayServicePrimaryContainerEnvironmentList getEnvironment();
```

- *Type:* <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList">EcsExpressGatewayServicePrimaryContainerEnvironmentList</a>

---

##### `repositoryCredentials`<sup>Required</sup> <a name="repositoryCredentials" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.repositoryCredentials"></a>

```java
public EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList getRepositoryCredentials();
```

- *Type:* <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList">EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList</a>

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.secret"></a>

```java
public EcsExpressGatewayServicePrimaryContainerSecretList getSecret();
```

- *Type:* <a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretList">EcsExpressGatewayServicePrimaryContainerSecretList</a>

---

##### `awsLogsConfigurationInput`<sup>Optional</sup> <a name="awsLogsConfigurationInput" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.awsLogsConfigurationInput"></a>

```java
public IResolvable|java.util.List<EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration> getAwsLogsConfigurationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration">EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration</a>>

---

##### `commandInput`<sup>Optional</sup> <a name="commandInput" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.commandInput"></a>

```java
public java.util.List<java.lang.String> getCommandInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `containerPortInput`<sup>Optional</sup> <a name="containerPortInput" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.containerPortInput"></a>

```java
public java.lang.Number getContainerPortInput();
```

- *Type:* java.lang.Number

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.environmentInput"></a>

```java
public IResolvable|java.util.List<EcsExpressGatewayServicePrimaryContainerEnvironment> getEnvironmentInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironment">EcsExpressGatewayServicePrimaryContainerEnvironment</a>>

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.imageInput"></a>

```java
public java.lang.String getImageInput();
```

- *Type:* java.lang.String

---

##### `repositoryCredentialsInput`<sup>Optional</sup> <a name="repositoryCredentialsInput" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.repositoryCredentialsInput"></a>

```java
public IResolvable|java.util.List<EcsExpressGatewayServicePrimaryContainerRepositoryCredentials> getRepositoryCredentialsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentials">EcsExpressGatewayServicePrimaryContainerRepositoryCredentials</a>>

---

##### `secretInput`<sup>Optional</sup> <a name="secretInput" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.secretInput"></a>

```java
public IResolvable|java.util.List<EcsExpressGatewayServicePrimaryContainerSecret> getSecretInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecret">EcsExpressGatewayServicePrimaryContainerSecret</a>>

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.command"></a>

```java
public java.util.List<java.lang.String> getCommand();
```

- *Type:* java.util.List<java.lang.String>

---

##### `containerPort`<sup>Required</sup> <a name="containerPort" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.containerPort"></a>

```java
public java.lang.Number getContainerPort();
```

- *Type:* java.lang.Number

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.image"></a>

```java
public java.lang.String getImage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.internalValue"></a>

```java
public IResolvable|EcsExpressGatewayServicePrimaryContainer getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer">EcsExpressGatewayServicePrimaryContainer</a>

---


### EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList <a name="EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_express_gateway_service.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList;

new EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList.get"></a>

```java
public EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentials">EcsExpressGatewayServicePrimaryContainerRepositoryCredentials</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<EcsExpressGatewayServicePrimaryContainerRepositoryCredentials> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentials">EcsExpressGatewayServicePrimaryContainerRepositoryCredentials</a>>

---


### EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference <a name="EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_express_gateway_service.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference;

new EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.property.credentialsParameterInput">credentialsParameterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.property.credentialsParameter">credentialsParameter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentials">EcsExpressGatewayServicePrimaryContainerRepositoryCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `credentialsParameterInput`<sup>Optional</sup> <a name="credentialsParameterInput" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.property.credentialsParameterInput"></a>

```java
public java.lang.String getCredentialsParameterInput();
```

- *Type:* java.lang.String

---

##### `credentialsParameter`<sup>Required</sup> <a name="credentialsParameter" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.property.credentialsParameter"></a>

```java
public java.lang.String getCredentialsParameter();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.property.internalValue"></a>

```java
public IResolvable|EcsExpressGatewayServicePrimaryContainerRepositoryCredentials getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentials">EcsExpressGatewayServicePrimaryContainerRepositoryCredentials</a>

---


### EcsExpressGatewayServicePrimaryContainerSecretList <a name="EcsExpressGatewayServicePrimaryContainerSecretList" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_express_gateway_service.EcsExpressGatewayServicePrimaryContainerSecretList;

new EcsExpressGatewayServicePrimaryContainerSecretList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretList.get"></a>

```java
public EcsExpressGatewayServicePrimaryContainerSecretOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecret">EcsExpressGatewayServicePrimaryContainerSecret</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretList.property.internalValue"></a>

```java
public IResolvable|java.util.List<EcsExpressGatewayServicePrimaryContainerSecret> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecret">EcsExpressGatewayServicePrimaryContainerSecret</a>>

---


### EcsExpressGatewayServicePrimaryContainerSecretOutputReference <a name="EcsExpressGatewayServicePrimaryContainerSecretOutputReference" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_express_gateway_service.EcsExpressGatewayServicePrimaryContainerSecretOutputReference;

new EcsExpressGatewayServicePrimaryContainerSecretOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.property.valueFromInput">valueFromInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.property.valueFrom">valueFrom</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecret">EcsExpressGatewayServicePrimaryContainerSecret</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueFromInput`<sup>Optional</sup> <a name="valueFromInput" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.property.valueFromInput"></a>

```java
public java.lang.String getValueFromInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `valueFrom`<sup>Required</sup> <a name="valueFrom" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.property.valueFrom"></a>

```java
public java.lang.String getValueFrom();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretOutputReference.property.internalValue"></a>

```java
public IResolvable|EcsExpressGatewayServicePrimaryContainerSecret getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecret">EcsExpressGatewayServicePrimaryContainerSecret</a>

---


### EcsExpressGatewayServiceScalingTargetList <a name="EcsExpressGatewayServiceScalingTargetList" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_express_gateway_service.EcsExpressGatewayServiceScalingTargetList;

new EcsExpressGatewayServiceScalingTargetList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetList.get"></a>

```java
public EcsExpressGatewayServiceScalingTargetOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTarget">EcsExpressGatewayServiceScalingTarget</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetList.property.internalValue"></a>

```java
public IResolvable|java.util.List<EcsExpressGatewayServiceScalingTarget> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTarget">EcsExpressGatewayServiceScalingTarget</a>>

---


### EcsExpressGatewayServiceScalingTargetOutputReference <a name="EcsExpressGatewayServiceScalingTargetOutputReference" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_express_gateway_service.EcsExpressGatewayServiceScalingTargetOutputReference;

new EcsExpressGatewayServiceScalingTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.resetAutoScalingMetric">resetAutoScalingMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.resetAutoScalingTargetValue">resetAutoScalingTargetValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.resetMaxTaskCount">resetMaxTaskCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.resetMinTaskCount">resetMinTaskCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAutoScalingMetric` <a name="resetAutoScalingMetric" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.resetAutoScalingMetric"></a>

```java
public void resetAutoScalingMetric()
```

##### `resetAutoScalingTargetValue` <a name="resetAutoScalingTargetValue" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.resetAutoScalingTargetValue"></a>

```java
public void resetAutoScalingTargetValue()
```

##### `resetMaxTaskCount` <a name="resetMaxTaskCount" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.resetMaxTaskCount"></a>

```java
public void resetMaxTaskCount()
```

##### `resetMinTaskCount` <a name="resetMinTaskCount" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.resetMinTaskCount"></a>

```java
public void resetMinTaskCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.autoScalingMetricInput">autoScalingMetricInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.autoScalingTargetValueInput">autoScalingTargetValueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.maxTaskCountInput">maxTaskCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.minTaskCountInput">minTaskCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.autoScalingMetric">autoScalingMetric</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.autoScalingTargetValue">autoScalingTargetValue</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.maxTaskCount">maxTaskCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.minTaskCount">minTaskCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTarget">EcsExpressGatewayServiceScalingTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autoScalingMetricInput`<sup>Optional</sup> <a name="autoScalingMetricInput" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.autoScalingMetricInput"></a>

```java
public java.lang.String getAutoScalingMetricInput();
```

- *Type:* java.lang.String

---

##### `autoScalingTargetValueInput`<sup>Optional</sup> <a name="autoScalingTargetValueInput" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.autoScalingTargetValueInput"></a>

```java
public java.lang.Number getAutoScalingTargetValueInput();
```

- *Type:* java.lang.Number

---

##### `maxTaskCountInput`<sup>Optional</sup> <a name="maxTaskCountInput" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.maxTaskCountInput"></a>

```java
public java.lang.Number getMaxTaskCountInput();
```

- *Type:* java.lang.Number

---

##### `minTaskCountInput`<sup>Optional</sup> <a name="minTaskCountInput" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.minTaskCountInput"></a>

```java
public java.lang.Number getMinTaskCountInput();
```

- *Type:* java.lang.Number

---

##### `autoScalingMetric`<sup>Required</sup> <a name="autoScalingMetric" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.autoScalingMetric"></a>

```java
public java.lang.String getAutoScalingMetric();
```

- *Type:* java.lang.String

---

##### `autoScalingTargetValue`<sup>Required</sup> <a name="autoScalingTargetValue" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.autoScalingTargetValue"></a>

```java
public java.lang.Number getAutoScalingTargetValue();
```

- *Type:* java.lang.Number

---

##### `maxTaskCount`<sup>Required</sup> <a name="maxTaskCount" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.maxTaskCount"></a>

```java
public java.lang.Number getMaxTaskCount();
```

- *Type:* java.lang.Number

---

##### `minTaskCount`<sup>Required</sup> <a name="minTaskCount" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.minTaskCount"></a>

```java
public java.lang.Number getMinTaskCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.internalValue"></a>

```java
public IResolvable|EcsExpressGatewayServiceScalingTarget getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTarget">EcsExpressGatewayServiceScalingTarget</a>

---


### EcsExpressGatewayServiceTimeoutsOutputReference <a name="EcsExpressGatewayServiceTimeoutsOutputReference" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.ecs_express_gateway_service.EcsExpressGatewayServiceTimeoutsOutputReference;

new EcsExpressGatewayServiceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeouts">EcsExpressGatewayServiceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|EcsExpressGatewayServiceTimeouts getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-aws.ecsExpressGatewayService.EcsExpressGatewayServiceTimeouts">EcsExpressGatewayServiceTimeouts</a>

---



